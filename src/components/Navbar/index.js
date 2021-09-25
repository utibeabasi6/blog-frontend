import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <a className="navbar-brand" href="/">Devops Mechanics</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="oi oi-menu"></span> Menu
</button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/posts" className="nav-link">Articles</Link></li>
                    <li className="nav-item"><a href="https://main.d6v9b3lqrnst.amplifyapp.com" className="nav-link">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;