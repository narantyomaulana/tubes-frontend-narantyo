import React from 'react'

import {Link} from 'react-router-dom';

const Home = () => {
return (
<div>
  <div>
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
        Indonesia's Heroes History
      </h2>
      <select className="heroes-search w-100" id="heroes" name="heroes">
        <option selected disabled value>Search Here...</option>
        <option value="all">All</option>
      </select>
      <br /><br /><br />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>
                No
              </td>
              <td>
                Name
              </td>
              <td>
                Birth Year
              </td>
              <td>
                Death Year
              </td>
              <td>
                Ascension Year
              </td>
              <td>
                Description
              </td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-primary" id="loadingBar">
        <div className="spinner-border spinner-border-sm" /> loading
      </div>
    </div>
    <br />
    <div className="container-fluid py-2 border-top">
      <div className="container text-secondary">
        <small>
          Copyright by Narantyo Maulana
        </small>
      </div>
    </div>
  </div>
</div>
)
}

export default Home
