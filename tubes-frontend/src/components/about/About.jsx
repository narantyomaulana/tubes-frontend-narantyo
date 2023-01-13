import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
return (
<>
  <nav className="navbar navbar-expand-md bg-light shadow navbar-light">
    <div className="container">
      {/* Brand */}
      <a className="navbar-brand" href="/index.html">Heroes</a>
      {/* Toggler/collapsibe Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
            Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
            About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
  <div className="container">
    <h2>
      About
    </h2>
    <br />
    <div className="row">
      <div className="col-lg-3 col-sm-12 mb-3 text-center">
        <img className="images-profile"
          src="images/olan.png" alt="" srcSet />
      </div>
      <div className="col">
        <b>Hello my name is Narantyo Maulana A.N,</b> my college identity number is <b>19104048.</b> I'am from Telkom Institute of
        Technology Purwokerto, when i build this site i'am a final collage student. Let author introduction about this site technology :
        <ul>
          <li>
            Main REST API Server : <a href="https://indonesia-public-static-api.vercel.app/api/heroes">see here</a>
          </li>
          <li>
            Author REST API : <a href="https://19104008-mhs.bdv.or.id/api/heroes.php">see here</a> (to bypass CORS
            Policy, because vercel block the ajax request)
          </li>
          <li>
            Using Framework With React JS
          </li>
        </ul>
        <div className="my-3">
          You can download this project  <a target="_blank" href="https://github.com/narantyomaulana/tubes-frontend-narantyo">here</a>
        </div>
        Thanks!
      </div>
    </div>
  </div>
  {/* End of content surface */}
  <br />
  <div className="container-fluid py-2 border-top">
    <div className="container text-secondary">
      <small>
        Copyright by Narantyo Maulana
      </small>
    </div>
  </div>
</>
)
}

export default About
