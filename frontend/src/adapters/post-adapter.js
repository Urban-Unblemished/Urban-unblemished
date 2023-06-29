import { fetchHandler, getPostOptions } from "../utils";


const baseUrl = '/api/post';


export const createPost = async (postData) => {
const postOptions = getPostOptions(postData)
const response = await fetchHandler(baseUrl, postOptions);
return response;
};


export const getPosts = async () => {
const [events] = await fetchHandler(baseUrl);
return events || [];
}; 