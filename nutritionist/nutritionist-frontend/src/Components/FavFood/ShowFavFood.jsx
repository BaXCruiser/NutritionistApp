import React, { Component } from 'react'
import axios from 'axios'
import ShowFavNutrients from './ShowFavNutrients';

export default class ShowFavFood extends Component {

    //Method to delete favourite food when delete button is clicked
    handleDeleteFavourite = () => {

        const deleteFood = {
            fdcId: this.props.foodItem.fdcId,
            description: this.props.foodItem.description,
            dataType: this.props.foodItem.dataType,
            foodNutrients: this.props.foodItem.foodNutrients
        }

        //User's emailId
        const emailId = localStorage.getItem("emailId");
        //JWT Token
        const token = localStorage.getItem("token");
        //REST API url to send delete request
        const api_url = `favouriteFood/users/${emailId}`;

        axios.delete(api_url, {
            headers: { Authorization: 'Bearer '+token, 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json','Access-Control-Allow-Methods':'*',},
        data : deleteFood})
            .then(res => {
                window.location.reload();
            })
            .catch(e => {
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
            <div className="show-body">
                <div class="card m-4 foodCard mx-auto">
                    <div class="card-header food" id="headingOne">
                        <h2 class="mb-0">
                            <div className="row">
                                <div className="col-md-10">
                                    <button class="btn  btn-block text-center align-item-center" type="button" id={this.props.foodItem.fdcId} onClick={this.handleShowNutrients}>
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
                                <div className="col-md-2 my-auto">
                                    <div className="btn btn-danger text-center" onClick={this.handleDeleteFavourite}><i class="fa fa-trash"></i></div>
                                </div>
                            </div>
                        </h2>
                    </div>
                    <div id={this.props.foodItem.fdcId + this.props.foodItem.fdcId} class="nutri" >
                        <ShowFavNutrients foodNutri={this.props.foodItem.foodNutrients} />
                    </div>
                </div>
            </div>
        )
    }
}
