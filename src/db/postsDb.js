export const posts = [
    {
        author: "t21_sklow",
        title: "This is a text for the post",
        created_utc: 1685649637.0,
        selftext: "",
        score: 1157,
        thumbnail: 'https://i.redd.it/na90b3m92c3b1.jpg',
        num_comments: 23,
        id: 23131
    },
    {
        author: "someone3929",
        title: "This is another text for the post",
        created_utc: 1685593293.0,
        selftext: "I'm sick of this shit \n\nIf the goal is 2% inflation and we are at 5% per the imaginary numbers they report you don't just skip a rate hike\n\nEspecially when true inflation is 20%+\n\nJust look at the price increase of a Big Mac pre-pandemic and today\n\nI trust that more as a gauge for inflation versus the phony government numbers \n\nNow we get screwed until July and they can always skip again since this is the new policy conditioning to tell the public\n\nYou want a slow moving train wreck? You guys are nailing it \n\nI really thought we were moving in the right direction \n\nAs usual you guys find a way to fuck it up",
        score: 1594,
        thumbnail: "self",
        num_comments: 1812,
        id: 4311
    },
    {
        author: "skvincha21",
        title: "This is a text for the post",
        created_utc: 1685593293.0,
        selftext: "",
        score: 57,
        thumbnail: 'https://i.redd.it/na90b3m92c3b1.jpg',
        num_comments: 0,
        id: 89034
    }
];

export const getPosts = async () => {
    return posts;
}