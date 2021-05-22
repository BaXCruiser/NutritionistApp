import axios from 'axios'
import React, { Component } from 'react'
import ShowFoodNutrients from './ShowFoodNutrients';
import "./ShowFood.css"

export default class ShowFood extends Component {


    //To store favourite food when Favourite button is clicked
    handleFavButtonClick = () => {
        const favfood = {
            fdcId: this.props.foodItem.fdcId,
            description: this.props.foodItem.description,
            dataType: this.props.foodItem.dataType,
            foodNutrients: this.props.foodItem.foodNutrients.slice(0, 20)
        }

        //User's emailId
        const emailId = localStorage.getItem("emailId");
        //JWT Token
        const token = localStorage.getItem("token");
        //REST API url to send post request
        const api_url = `favouriteFood/users/${emailId}`

        //POST to backend Favourite Rest Service
        axios.post(api_url, favfood,
            {
                headers: {
                    Authorization: `Bearer ${token}`, 'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                alert("Food added successfully");
            })
            .catch(e => {
                axios.put(api_url, favfood,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, 'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => {
                        alert("Food added successfully");
                    })
                    .catch(e => {
                    })
            })


    }

    //Method to show and hide food nutrients component
    handleShowNutrients = () => {
        document.getElementById(this.props.foodItem.fdcId).blur();
        const nutrients = document.getElementById(this.props.foodItem.fdcId + this.props.foodItem.fdcId);
        if (nutrients.style.display === "none") {
            nutrients.style.display = "block";
        } else {
            nutrients.style.display = "none";
        }
    }

    render() {
        return (
            <div className="">
                <div className="card m-4 foodCard mx-auto">
                    <div className="card-header food" id="headingOne">
                        <h2 className="mb-0">
                            <div className="row">
                                <div className="col-md-9">
                                    <button className="btn  btn-block text-center align-item-center" type="button" id={this.props.foodItem.fdcId} onClick={this.handleShowNutrients}>
                                        <div className="row text-success">
                                            <div className="col-md-4">
                                                <p className="text-dark">FDC Id</p>
                                                <p>{this.props.foodItem.fdcId}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="text-dark">Description</p>
                                                <p>{this.props.foodItem.description}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="text-dark">Data Type</p>
                                                <p>{this.props.foodItem.dataType}</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-md-3 my-auto p-0 mx-0" >
                                    <div className="btn btn-success text-center " onClick={this.handleFavButtonClick}><i className="fa fa-heart"></i></div>
                                </div>
                            </div>
                        </h2>
                    </div>
                    <div id={this.props.foodItem.fdcId + this.props.foodItem.fdcId} className="nutri" >
                        <ShowFoodNutrients foodNutri={this.props.foodItem.foodNutrients} />
                    </div>
                </div>

            </div>
        )
    }
}
