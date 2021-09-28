import Hero from "../../components/Hero";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";


const Homepage = () => {
    let [response, setResponse] = useState({});
    useEffect(() => {
        let posts, error;
        getPosts().then(result => {
            posts = result.posts
            console.log(posts);
            setResponse({ posts, error })
        }).catch(err => {
            error = err
            setResponse({ posts, error })
        });
    }, [])
    return (
        <>
            <Hero />
            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container-fluid px-md-4">
                    <div className="row no-gutters">
                        {!response.posts && !response.error && <h1>Loading</h1>}
                        {response.error && <h1>Error</h1>}
                        {response.posts && response.posts.map((post, index) => <BlogCard key={index} post={post} darken={index % 2 === 0} />)}
                    </div>
                    <div className="row py-5">
                        <div className="col-md-12 py-md-5 text-center">
                            <Link to="/posts" className="btn-custom-blog">View all articles <span
                                className="fa fa-chevron-right"></span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Homepage;