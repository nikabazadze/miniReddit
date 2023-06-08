export const API_ROOT = 'https://www.reddit.com';

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}

export const getSubredditPosts = async (url) => {
    const response = await fetch(`${API_ROOT}${url}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}

export const getPostComments = async ({permalink, index}) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    return [index, json[1].data.children.map((subreddit) => subreddit.data)];
}