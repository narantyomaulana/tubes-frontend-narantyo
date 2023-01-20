import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
return (
<>
<header className="header-area">
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">Narantyo Maulana</a>
        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
          <span className="menu-icon-bar" />
          <span className="menu-icon-bar" />
          <span className="menu-icon-bar" />
        </button>
        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
            </li>
            <li>
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
    <br />
    <div className="row">
      <div className=" text-center">
        <img className="images-profile"
          src="images/olan.png" alt=""/>
      </div>
      <div className="col text-center mt-4">
        <b>Hello my name is Narantyo Maulana A.N,</b> my college identity number is <b>19104048.</b> I'am from Telkom Institute of
        Technology Purwokerto,<br /> when i build this site i'am a final collage student. Let author introduction about this site technology :  
          <li className='mt-3'>
            Main REST API Server : <a href="https://indonesia-public-static-api.vercel.app/api/heroes">see here</a>
          </li>
          <li>
            Using Framework With React JS and Bootstrap 4
          </li>
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
    <div className="container text-center">
      <small>
        Copyright by Narantyo Maulana
      </small>
    </div>
  </div>
  </header>
</>
)
}

export default About
