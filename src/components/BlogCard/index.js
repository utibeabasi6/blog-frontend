import { Link } from "react-router-dom";
import parseDate from "../../utils/parse-date";


const BlogCard = ({darken, post}) => {
    return (
        <div className={`col-md-12 blog-wrap ${darken? "bg-darken": null}`}>
            <div className="row mb-0 no-gutters align-items-center">
                <div className={`col-md-6 img img-blog js-fullheight ${darken? "order-md-last": null}`} style={{ "backgroundImage": `url(http://localhost:8000${post.coverImage.src})`, "height": "500px" }}>
                </div>
                <div className="col-md-6">
                    <div className="text p-md-5 py-5 px-4 ftco-animate fadeInUp ftco-animated">
                        <p className="meta">
                            <span className="fa fa-calendar mr-2"></span>{post.publishDate && parseDate(post.publishDate)}
                            <span className="fa fa-user mr-2"></span>{post.author.status}
                            {/* <span className="fa fa-comment mr-2"></span> {post.commentsCount} */}
                        </p>
                        <h2 className="mb-4"><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                        <div className="icon d-flex align-items-center">
                            <div className="img" style={{ "backgroundImage": `url(http://localhost:8000${post.author.image.src})` }}></div>
                            <div className="position pl-3">
                                <h4 className="mb-0">{post.author.name}</h4>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;