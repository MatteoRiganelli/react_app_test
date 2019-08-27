import React from "react";
import headerCss from "../../css/mainLayout/header/header.css";
import Logo from "../../images/notebook.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="logo-image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link" href="/#home-top">
              Home
            </a>
            <a className="nav-item nav-link" href="#what">
              What
            </a>
            <a className="nav-item nav-link" href="#who">
              Who
            </a>
          </div>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
            <a className="nav-item nav-link" href="/registration">
              Registrazione
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
