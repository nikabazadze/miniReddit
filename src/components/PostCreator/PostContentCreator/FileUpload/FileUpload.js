import React, { useRef, useState } from "react";
import AWS from 'aws-sdk';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './FileUpload.css';
import uploadIcon from '../../icons/uploadIcon.png';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION
});

const s3 = new AWS.S3();

function FileUpload({ fileUrl, setFileUrl, contentType }) {
    const inputRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [ isLandscape, setIsLandscape ] = useState(false);

    // Uploads file in AWS S3 bucket. Max file size 5GB.
    const handleFileUpload = async (target) => {
        const file = target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

        setLoading(true);

        const fileName = file.name;
        const fileType = file.type;
        const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Expires: 60, // URL expires in 60 seconds
            ContentType: fileType,
        };

        try {
            const url = s3.getSignedUrl('putObject', params);

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': fileType,
                },
                body: file,
            });

            if (!response.ok) {
                throw new Error(`Error uploading file: ${response.statusText}`);
            }

            setFileUrl(getTrimmedUrl(response.url));
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
            setLoading(false);
        }
    };

    // Returns trimmed url by removing query part
    const getTrimmedUrl = (url) => {
        const searchTerm = '?AWSAccessKeyId';
        const index = url.indexOf(searchTerm);
        const trimmedUrl = url.slice(0, index);
        return trimmedUrl;
    };

    const handleDrop = e => {
        e.preventDefault();
        inputRef.current.files = e.dataTransfer.files;
        handleFileUpload(e.dataTransfer);
    };

    const handleImgOrientation = () => {
        if (imageRef.current) {
            const imgWidth = imageRef.current.width;
            const imgHeight = imageRef.current.height;

            if (imgWidth > imgHeight) setIsLandscape(true);
        };
    };

    const renderLoadingSkeleton = () => {
        return (
            <div className="upload-skeleton-container">
                <Skeleton className="upload-skeleton" />
            </div>
        )
    };

    return (
        <label 
            htmlFor="input-file" 
            id="input-drop-area" 
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={fileUrl ? {border: "2px solid #d8d8d8", backgroundColor: "#dae0e6"} : {}} 
        >
            <input 
                type="file" 
                id="input-file"
                ref={inputRef}
                onChange={(e) => handleFileUpload(e.target)}
                hidden
            />
            {fileUrl ?
            <div className="uploaded-file-container" >
                {contentType === "image" ? 
                    <img src={fileUrl} 
                        alt="User uploaded image" 
                        ref={imageRef} 
                        style={isLandscape ? {maxWidth: "100%", height: "auto"} : {}}
                        onLoad={() => {
                            handleImgOrientation();
                            setLoading(false);
                        }}
                    />
                :
                    <video 
                        src={fileUrl}
                        controls
                        ref={videoRef} 
                        onLoad={() => setLoading(false)}
                    >
                        Video not supported
                    </video>
                }
            </div>
            :
            loading ? 
            renderLoadingSkeleton() 
            :
            <div className="upload-prompt-container" >
                <img src={uploadIcon} alt="Upload icon" />
                <p>Drag and Drop image <br/> or Click to upload</p>
            </div>}
        </label>
    );
};

export default FileUpload;