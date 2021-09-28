import * as contentful from "contentful";
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "./settings";

const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
})

export const getPosts = async() => {
    let posts, error;
    let response = await client.getEntries({ "content_type": "post" })
    error = response.errors
    posts = response.items
    return { posts, error };
}

export const getPost = async(id) => {
    let response = await client.getEntry(id)
    return response;
}