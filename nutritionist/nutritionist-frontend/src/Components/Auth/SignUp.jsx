import React, { Component } from "react";
import "../Auth/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: this.firstname,
      lastName: this.lastname,
      emailId: this.email,
      password: this.password,
    };

    axios
      .post("/userservice/register", data,  {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        alert("SignUp successful")
      })
      .catch((err) => {
        alert("EmailId already in use");
      });
  };

  render() {
    return (

      <div className="signup-body">
      <div className="signup-body">
      <div className="outer">
        <div className="inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => (this.firstname = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => (this.lastname = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => (this.email = e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => (this.password = e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">sign in?</Link>
            </p>
          </form>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
