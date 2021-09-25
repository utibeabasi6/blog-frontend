import Hero from "../../components/Hero";
import BlogCard from "../../components/BlogCard";
import { gql, useQuery } from "@apollo/client";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

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
const Homepage = () => {
    const { loading, error, data } = useQuery(ALL_POSTS)
    return (
        <>
            <Hero />
            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container-fluid px-md-4">
                    <div className="row no-gutters">
                        {loading && <h1>Loading</h1>}
                        {error && <h1>Error</h1>}
                        {data && console.log(data)}
                        {data && data.allPosts.map((post, index) => <BlogCard post={post} darken={index % 2 === 0} />)}
                    </div>
                    <div class="row py-5">
                        <div class="col-md-12 py-md-5 text-center">
                            <Link to="/posts" class="btn-custom-blog">View all articles <span
                                class="fa fa-chevron-right"></span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Homepage;