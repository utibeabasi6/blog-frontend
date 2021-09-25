import { gql, useQuery } from "@apollo/client"
import BlogDetailHero from "../../components/PostDetailHero"
import { DocumentRenderer } from "@keystone-next/document-renderer";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import parseDate from "../../utils/parse-date";


const PostDetailPage = (props) => {
    const id = props.match.params.id
    const DETAIL_QUERY = gql`
query {
    Post(where: {id: "${id}"}){
        title
        content{
            document
        }
        id
        coverImage{
            src
        }
        publishDate
        commentsCount
        author{
            name
            role
            status
            image{
                src
            }
        }
    }
}`

    const { loading, error, data } = useQuery(DETAIL_QUERY)
    return (
        <>
            <BlogDetailHero />
            {error && <h1>Error</h1>}
            {loading && <h1>Loading</h1>}
            {data && <section class="ftco-section">
                <div class="container-fluid px-md-4">
                    <div class="row no-gutters">
                        <div class="col-md-12 blog-wrap">
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-6 img img-blog js-fullheight" style={{"background-image":`url(http://localhost:8000${data.Post.coverImage.src})`, height: "500px"}}>
                                </div>
                                <div class="col-md-6">
                                    <div class="text p-md-5 py-5 px-4 ftco-animate fadeInUp ftco-animated">
                                        <p class="meta">
                                            <span class="fa fa-calendar mr-2"></span>{data.Post.publishDate && parseDate(data.Post.publishDate)}
                                            <span class="fa fa-user mr-2"></span>{data.Post.author.status}
                                            {/* <span class="fa fa-comment mr-2"></span> {data.Post.commentsCount} */}
                                        </p>
                                        <h2 class="mb-4">{data.Post.title}</h2>
                                        <div class="icon d-flex align-items-center">
                                            <div class="img" style={{"background-image":`url(http://localhost:8000${data.Post.author.image.src})`}}></div>
                                            <div class="position pl-3">
                                                <h4 class="mb-0">{data.Post.author.name}</h4>
                                                <span>{data.Post.author.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row justify-content-center pt-4 py-md-5">
                        <div class="col-md-7">
                        <DocumentRenderer document={data.Post.content.document}/>
                        </div>
                        </div>
                </div>
            </section>}
            <Footer/>
        </>
    )
}

export default withRouter(PostDetailPage);