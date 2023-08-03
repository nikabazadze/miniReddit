export const API_ROOT = 'https://www.reddit.com';

/**
 * Returns subreddits array
 * @returns Subreddits
 */
export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}

/**
 * Returns subreddit's posts by giving subreddit's url (/subreddit's-name)
 * @param {String} url 
 * @returns Subreddit's posts
 */
export const getSubredditPosts = async (url) => {
    const response = await fetch(`${API_ROOT}${url}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}

/**
 * Returns post's comments by giving object with post's permalink and post's index
 * @param {Object} 
 * @returns Post's comments
 */
export const getPostComments = async ({permalink, index}) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    return [index, json[1].data.children.map((subreddit) => subreddit.data)];
}