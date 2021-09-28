import PostDetailHero from "../../components/PostDetailHero"
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import RichTextResponse from "../../utils/document-renderer";
import { useEffect, useState } from "react";
import { getPost } from "../../utils/api";
import { parseImage } from "../../utils/parse-image";


const PostDetailPage = (props) => {
    const id = props.match.params.id
    let [response, setResponse] = useState({});
    useEffect(() =>{
        let post, error
        getPost(id).then(result => {
            console.log(result);
            post = result
            setResponse({post, error})
        }).catch(err => {
            error = err
            console.log(err);
            setResponse({post, error})
        })
    }, [id])
    return (
        <>
            <PostDetailHero />
            {response.error && <h1>Error</h1>}
            {!response.post && !response.error && <h1>Loading</h1>}
            {response.post && <section className="ftco-section">
                <div className="container-fluid px-md-4">
                    <div className="row no-gutters">
                        <div className="col-md-12 blog-wrap">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-6 img img-blog js-fullheight" style={{"backgroundImage":`url(${parseImage(response.post.fields.coverImage)})`, height: "500px"}}>
                                </div>
                                <div className="col-md-6">
                                    <div className="text p-md-5 py-5 px-4 ftco-animate fadeInUp ftco-animated">
                                        <p className="meta">
                                            <span className="fa fa-calendar mr-2"></span>{response.post.fields.publishDate}
                                            <span className="fa fa-user mr-2"></span>{response.post.fields.author.fields.status? "Admin": "Guest"}
                                            {/* <span className="fa fa-comment mr-2"></span> {response.post.fields.commentsCount} */}
                                        </p>
                                        <h2 className="mb-4">{response.post.fields.title}</h2>
                                        <div className="icon d-flex align-items-center">
                                            <div className="img" style={{"backgroundImage":`url(${parseImage(response.post.fields.author.fields.image)})`}}></div>
                                            <div className="position pl-3">
                                                <h4 className="mb-0">{response.post.fields.author.fields.name}</h4>
                                                <span>{response.post.fields.author.fields.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row justify-content-center pt-4 py-md-5">
                        <div className="col-md-7">
                        {RichTextResponse({richTextResponse: response.post.fields.content})}
                        </div>
                        </div>
                </div>
            </section>}
            <Footer/>
        </>
    )
}

export default withRouter(PostDetailPage);