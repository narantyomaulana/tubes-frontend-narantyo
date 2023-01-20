import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const Home = () => {

return (
  <div>
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
    <div className="banner">
      <div className="container">
        <h1>Daftar Pahlawan</h1>
        <p>Menampilkan List Semua Pahlawan</p>
        <button  className="button button-primary">
          <Link to="/list" className="nav-link">
            Cari Pahlawan
            </Link>
        </button>
   
      </div>
    </div>
  </header>
  {/* <main>
    <section id="content" className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
          </div>
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
          </div>
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
          </div>
        </div>
      </div>
    </section>
  </main> */}
</div>

)

}

export default Home
