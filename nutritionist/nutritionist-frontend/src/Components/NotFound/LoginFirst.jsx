import React, { Component } from 'react'
import './LoginFirst.css'

export default class LoginFirst extends Component {
    render() {
        return (
            <div className="loginfirst pt-5">
            <div class="jumbotron mt-5 ">
            <div class="container">
              <h1 class="display-5">Please login first!</h1>
              <p class="lead">Login to see favourite foods.</p>
            </div>
          </div>
          </div>
        )
    }
}
