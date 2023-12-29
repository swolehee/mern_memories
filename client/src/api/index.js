import axios from "axios";

const posts_url = process.env.REACT_APP_POSTS_URL;
const sports_feed_url = process.env.REACT_APP_SPORTS_FEED_URL;

export const fetchPosts = () => axios.get(posts_url);
export const createPost = (newPost) => axios.post(posts_url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${posts_url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${posts_url}/${id}`);
export const likePost = (id) => axios.patch(`${posts_url}/${id}/likePost`);

export const getSportsFeed = () => axios.get(sports_feed_url);
export const getAllSportsFeeds = () => axios.get(`${sports_feed_url}/all`);
export const getSportsArticle = (url) =>
  axios.get(`${sports_feed_url}/article?url=${encodeURIComponent(url)}`);
