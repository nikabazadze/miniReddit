export const API_ROOT = 'https://www.reddit.com';

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}

export const getSubredditPosts = async (subredditUrl, thunkAPI) => {
    const response = await fetch(`${API_ROOT}${subredditUrl}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}