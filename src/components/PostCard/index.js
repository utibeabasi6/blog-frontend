import parseDate from "../../utils/parse-date"

const PostCard = ({post}) => {
    return (
                <div class="col-md-6 col-lg-4 blog-wrap blog-wrap-2 px-md-5 ftco-animate fadeInUp ftco-animated">
                    <a href="blog-single.html" class="img img-blog w-100 border d-block" style={{"background-image": `url(http://localhost:8000${post.coverImage.src})`}}>
</a>
                    <div class="text text-2 py-4 p-0 ftco-animate fadeInUp ftco-animated">
                        <p class="meta">
                            <span class="fa fa-calendar mr-2"></span>{post.publishDate && parseDate(post.publishDate)}
                            <span class="fa fa-user mr-2"></span>{post.author.status}
                        </p>
                        <h2 class="mb-4"><a href="blog-single.html">{post.title}</a></h2>
                        <div class="icon d-flex align-items-center">
                            <div class="img" style={{"background-image":`url(http://localhost:8000${post.author.image.src})`}}></div>
                            <div class="position pl-3">
                                <h4 class="mb-0">{post.author.name}</h4>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default PostCard