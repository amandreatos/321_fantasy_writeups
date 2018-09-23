import React from 'react'
import { Link } from 'gatsby'
import espn from '../img/espn-logo.png'
import logo from '../img/321-logo-circle.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              style={{ height: "100%", width: "30px", margin: "0 0.5rem 0 0" }}
              src={logo}
              alt="Kaldi"
            />
          </figure>
          <span style={{ fontWeight: 700 }} className="ttoHeadline">
            Fantasy Football
          </span>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="http://games.espn.com/ffl/standings?leagueId=577067&seasonId=2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon espn-logo">
            <img src={espn} alt="ESPN" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar
