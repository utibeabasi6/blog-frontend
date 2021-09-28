import { Link } from "react-router-dom";

const PostDetailHero = () => {
    return (
        <section className="hero-wrap hero-wrap-2">
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 text-center ftco-animate fadeInUp ftco-animated pt-5">
                    <h1 className="mb-3 bread">My Blog</h1>
                    <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="fa fa-chevron-right"></i></Link></span> <span className="mr-2"><Link to="/posts">Blog <i className="fa fa-chevron-right"></i></Link></span> <span>Blog Details<i className="fa fa-chevron-right"></i></span></p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PostDetailHero;