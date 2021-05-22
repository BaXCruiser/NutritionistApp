import "../Auth/login.css";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import axios from "axios";

import { useHistory, Redirect } from "react-router-dom";

export default class login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      emailId: this.email,
      password: this.password,
    };
    axios
      .post("/userservice/login", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        if (res.status == 200) {
          this.props.history.push("/");
        }

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("emailId", data.emailId);

      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        if (err) {
          alert("please enter correct login details");
        }
      });
  };

  render() {
    return (
      <div className="login-body">
      <div className="outer">
        <div className="inner">
          <form onSubmit={this.handleSubmit}>
            <h3>LogIn</h3>

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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              New User? <Link to="/signup">SignUp.</Link>
            </p>
          </form>
        </div>
      </div>
      </div>
      
    );
  }
}
