const Hero = () => {
    return (
        <section className="hero-wrap py-md-4">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters justify-content-center slider-text align-items-center" data-scrollax-parent="true">
                <div className="col-md-10 fadeInUp ftco-animated ftco-animate py-5">
                    <h1 className="text-center">De<span>vo</span>ps</h1>
                    <div className="row pb-md-5">
                        <div className="col-md-8">
                            <h2>Hello! I'm Utibeabasi Umanah, A DevOps engineer and tech writer</h2>
                            <p>Welcome to my blog👋. Here I write about DevOps and other fields of tech. Hope you learn a lot✌️ </p>
                        </div>
                        <div className="col-md-4">
                            <div className="author">
                                <div className="img" style={{"backgroundImage":"url(/images/profilepic.jpg)"}}></div>
                                <div className="text">
                                    <h3>Utibeabasi Umanah</h3>
                                    <p>A DevOps engineer currently learning more about the cloud, automation and DevSecOps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero;