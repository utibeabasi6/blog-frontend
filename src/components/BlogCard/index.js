import { Link } from "react-router-dom";
import { parseImage } from "../../utils/parse-image";


const BlogCard = ({darken, post}) => {
    return (
        <div className={`col-md-12 blog-wrap ${darken? "bg-darken": null}`}>
            <div className="row mb-0 no-gutters align-items-center">
                <div className={`col-md-6 img img-blog js-fullheight ${darken? "order-md-last": null}`} style={{ "backgroundImage": `url(${parseImage(post.fields.coverImage)})`, "height": "500px" }}>
                </div>
                <div className="col-md-6">
                    <div className="text p-md-5 py-5 px-4 ftco-animate fadeInUp ftco-animated">
                        <p className="meta">
                            <span className="fa fa-calendar mr-2"></span>{post.fields.publishDate}
                            <span className="fa fa-user mr-2"></span>{post.fields.author.fields.isAdmin? "Admin": "Guest"}
                            {/* <span className="fa fa-comment mr-2"></span> {post.commentsCount} */}
                        </p>
                        <h2 className="mb-4"><Link to={`/posts/${post.sys.id}`}>{post.fields.title}</Link></h2>
                        <div className="icon d-flex align-items-center">
                            <div className="img" style={{ "backgroundImage": `url(${parseImage(post.fields.author.fields.image)})` }}></div>
                            <div className="position pl-3">
                                <h4 className="mb-0">{post.fields.author.fields.name}</h4>
                                <span>{post.fields.author.fields.job}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;