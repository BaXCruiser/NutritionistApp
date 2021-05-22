import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    comp: true,
  };

  componentDidMount() {}

  handleClick = () => {
    localStorage.clear();
    this.setState({ comp: false });
  };

  render() {
    let buttons;

    if (localStorage.getItem("token")) {
      buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} onClick={this.handleClick} className="nav-link">
              {" "}
              LogOut{" "}
            </Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="nav navbar-right ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/SignUp">
              SignUp
            </NavLink>
          </li>
        </ul>
      );
    }

    return (
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <p className="h2 text-success font-weight-bold ml-1 mr-5">Nutritonist</p>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  <p className="h5 text-success font-weight-bold">Home</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/search">
                  <p className="h5 text-success font-weight-bold">Search Food</p>
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" exact to="/favfood">
               <p className="h5 text-success font-weight-bold">Fav Food</p>
                </NavLink>
              </li>
            </ul>
            {buttons}
          </div>
        </nav>
      </div>
    );
  }
}
