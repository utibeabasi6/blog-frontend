import { Link } from "react-router-dom";

const BlogDetailHero = () => {
    return (
        <section class="hero-wrap hero-wrap-2">
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
                <div class="col-md-9 text-center ftco-animate fadeInUp ftco-animated pt-5">
                    <h1 class="mb-3 bread">My Blog</h1>
                    <p class="breadcrumbs"><span class="mr-2"><Link to="/">Home <i class="fa fa-chevron-right"></i></Link></span> <span class="mr-2"><Link to="/posts">Blog <i class="fa fa-chevron-right"></i></Link></span> <span>Blog Details<i class="fa fa-chevron-right"></i></span></p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BlogDetailHero;