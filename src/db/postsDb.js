export const posts = [
    {
        author: "t21_sklow",
        title: "This is a text for the post",
        created_utc: 1685593293.0,
        score: 1157,
        thumbnail: 'https://i.redd.it/na90b3m92c3b1.jpg',
        num_comments: 23
    },
    {
        author: "someone3929",
        title: "This is another text for the post",
        created_utc: 1685593293.0,
        score: 1594,
        thumbnail: 'https://i.redd.it/na90b3m92c3b1.jpg',
        num_comments: 1812
    },
    {
        author: "skvincha21",
        title: "This is a text for the post",
        created_utc: 1685593293.0,
        score: 57,
        thumbnail: 'https://i.redd.it/na90b3m92c3b1.jpg',
        num_comments: 0
    }
];

export const getPosts = async () => {
    return posts;
}