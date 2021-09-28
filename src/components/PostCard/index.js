import { Link } from "react-router-dom";
import { parseImage } from "../../utils/parse-image";

const PostCard = ({post}) => {
    return (
                <div className="col-md-6 col-lg-4 blog-wrap blog-wrap-2 px-md-5 ftco-animate fadeInUp ftco-animated">
                    <Link to={`/posts/${post.sys.id}`} className="img img-blog w-100 border d-block" style={{"backgroundImage": `url(${parseImage(post.fields.coverImage)})`}}>
</Link>
                    <div className="text text-2 py-4 p-0 ftco-animate fadeInUp ftco-animated">
                        <p className="meta">
                            <span className="fa fa-calendar mr-2"></span>{post.fields.publishDate}
                            <span className="fa fa-user mr-2"></span>{post.fields.author.status? "Admin": "Guest"}
                        </p>
                        <h2 className="mb-4"><Link to={`/posts/${post.sys.id}`}>{post.fields.title}</Link></h2>
                        <div className="icon d-flex align-items-center">
                            <div className="img" style={{"backgroundImage":`url(${parseImage(post.fields.author.fields.image)})`}}></div>
                            <div className="position pl-3">
                                <h4 className="mb-0">{post.fields.author.fields.name}</h4>
                                <span>{post.fields.author.fields.job}</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default PostCard