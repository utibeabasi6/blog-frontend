import PostCard from "../../components/PostCard";
import { gql, useQuery } from "@apollo/client";
import PostHero from "../../components/PostHero";

const ALL_POSTS = gql`
    query {
        allPosts{
            title
            id
            author{
                name
                image{
                    src
                }
                status
                role
            }
            coverImage{
                src
            }
            publishDate
            commentsCount
        }
    }
`
const PostsPage = () => {
    const { loading, error, data } = useQuery(ALL_POSTS)

    return (<>
    <PostHero/>
            <section class="ftco-section">
        <div class="container-fluid">
            <div class="row justify-content-center">
                {loading && <h1>Loading</h1>}
                {error && <h1>Error</h1>}
            {data && data.allPosts.map((post) => <PostCard post={post}/>)}
            </div></div></section>
    </>)
}

export default PostsPage;