import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import PostHero from "../../components/PostHero";
import { getPosts } from "../../utils/api";

const PostsPage = () => {
    let [response, setResponse] = useState({});
    useEffect(() => {
        let posts, error;
        getPosts().then(result => {
            posts = result.posts
            setResponse({ posts, error })
        }).catch(err => {
            error = err
            setResponse({ posts, error })
        });
    }, [])
    return (<>
    <PostHero/>
            <section className="ftco-section">
        <div className="container-fluid">
            <div className="row justify-content-center">
                {!response.posts && !response.error && <h1>Loading</h1>}
                {response.error && <h1>Error</h1>}
            {response.posts && response.posts.map((post, index) => <PostCard key={index}  post={post}/>)}
            </div></div></section>
    </>)
}

export default PostsPage;