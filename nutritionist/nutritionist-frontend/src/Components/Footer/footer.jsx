import React from 'react'

export default function footer() {
    return (
        <div className="bg-light container-fluid">
            <hr/>
            <div className="row pt-4 mb-4">
                <div className="col-md-4">
                    <br />
                    <br/>
                    <h1 className="font-weight-bold text-success">Nutritionist</h1>
                </div>
                <div className="col-md-4 text-success">
                    <br/>
                    <h5 className="font-weight-bold">Reach us</h5>
                    <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>

                </div>
                <div className="col-md-4 text-success">
                    <h5 className="font-weight-bold">Contact us</h5>
                    <p>nutritionist@gmail.com</p>
                    
                    <h5 className="font-weight-bold">Connect with us</h5>
                    <div className="social-media-links">
                        <a href="https://www.twitter.com"><i className="fa fa-twitter text-success h5 p-2" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com"><i className="fa fa-facebook-f text-success h5 p-2" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com"><i className="fa fa-youtube text-success h5 p-2" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram text-success h5 p-2" aria-hidden="true"></i></a>
                        <a href="https://www.gmail.com"><i className="fa fa-google-plus text-success h5 p-2" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <hr/>
        <p className="text-success my-4">&copy; Copyright 2020 Nutritionist - All Rights Reserved</p>
        </div>
    )
}
