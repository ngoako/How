import React, { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import logo from "../images/icon_app.png";
import "../Components/Howto.css";
import videoback from "../images/videoback.mp4";
import { GiArchiveRegister } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";
import { MdPendingActions, MdOutlineTipsAndUpdates, MdElectricalServices } from "react-icons/md";

function Howto() {
  return (
    <body>
      <nav className="navbar sticky-top navbar-light bg-light navbar-expand-md">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                <Link className="my-navLinks" to={"/"}>
                  Home
                </Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={"/Frequently"} className="my-navLinks">
                  Faq
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link className="my-navLinks" to={"/Frequently"}>
                  Blog
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={"/Frequently"} className="my-navLinks">
                  About us
                </Link>
              </a>
            </li>

            <li className="nav-item farRight">
              <button className="btn btn-primary btnSignup ml-2">
                <Link className="my-navLinks" to={"/Login"}>
                  Log in
                </Link>
              </button>
            </li>
            <li className="nav-item farRight">
              <button className="btn btn-primary btnSignup ml-2">
                <Link className="my-navLinks" to={"/Register"}>
                  Sign up
                </Link>
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary ml-2 btnRequest">
                <Link className="my-navLinks" to={"/Login"}>
                  Request a Demo
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    HOW TO USE THE APP <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><GiArchiveRegister/></span>
                    Registration
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><BiLogInCircle/></span>
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdPendingActions/></span>
                    Incidents
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdOutlineTipsAndUpdates/></span>
                    Community Updates
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdElectricalServices/></span>
                    Incidents
                  </a>
                </li>
              </ul>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdElectricalServices/></span>
                    Government Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdElectricalServices/></span>
                    Community Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdElectricalServices/></span>
                    WIFI Spots
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span className="myIcons"><MdElectricalServices/></span>
                    Municipalities
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            
                <div className="row">
                  <div className="videoColumn">
                    <div className="card">
                      <video
                        className="mainVideo"
                        src={videoback}
                        controls
                        loop
                        autoPlay
                        muted
                      />
                    </div>
                  </div>
                </div>

          
            <div className="row">
                <div className="col-md-12 myDisplay mt-5 mb-5">
                    <h4>Steps on how to register on the App</h4>
                    <h4>Steps on how to register on the App</h4>
                    <h4>Steps on how to register on the App</h4>
                    <h4>Steps on how to register on the App</h4>
                    <h4>Steps on how to register on the App</h4>
                </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="my-footer pt-4">
        <div className="row">
          <div className="col-md-4 pt-4 pb-3 social">
            {/*   <a href="https://www.facebook.com/">
                <BsFacebook size={40} />
              </a> */}
            <a href="https://twitter.com/">
              <FaTwitter size={40} />
            </a>
          </div>
          <div className="col-md-4">
            <ul style={{ display: "grid" }}>
              <li className="footer-item">
                <a className="footer-link">community Updates</a>
              </li>
              <li className="footer-item">
                <a className="footer-link">Incidents</a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Government Services
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 futer">
            <ul style={{ display: "grid" }}>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  About Us
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Mission
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Howto;
