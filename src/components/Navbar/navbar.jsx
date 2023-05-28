import './navbar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-background">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="/Images/Gdaddy-logo.png" className="logo-img ms-5" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center me-5" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active h4 mx-3" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link h4 mx-3" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link h4 mx-3" href="/gallery">Our Work</a>
                </li>
                <li className="nav-item">
                <a className="nav-link h4 mx-3" href="/quotes" tabindex="-1" aria-disabled="true">Get A Quote</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
    }

    export default NavBar;