import React from "react";
import './FileUpload.css';
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION
});

const s3 = new AWS.S3();

function FileUpload({ setFileUrl }) {

    const handleFileUpload = async ({ target }) => {
        const file = target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

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
        }
    };

    // Returns trimmed url by removing query part
    const getTrimmedUrl = (url) => {
        const searchTerm = '?AWSAccessKeyId';
        const index = url.indexOf(searchTerm);
        const trimmedUrl = url.slice(0, index);
        return trimmedUrl;
    }

    return (
        <input type="file" onChange={handleFileUpload} />
    );
};

export default FileUpload;