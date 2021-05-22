import React, { Component } from 'react'
import axios from 'axios'
import ShowFood from './ShowFood'
import './SearchFood.css'


export default class ShowList extends Component {
    //To store foods data
    state = {
        foods: [
        ]
    }

    //Method to handle click on search button 
    handleClick = () => {
        const inputQuery = document.getElementById("inputQuery").value;
        const sortByValue = document.getElementById("sortBy").value;
        //Query parameter to sort foods array on the basis of that field
        let sortBy;
        switch (sortByValue) {
            case "FDC Id":
                sortBy = "fdcId";
                break;
            case "Published Date":
                sortBy = "publishedDate";
                break;
            default:
                sortBy = ""
                break;
        }

        //FoodData Central API endpoint
        //Returns a list of foods that matched search (query) keywords
        const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dFrdgMew7Q38CHY4JM4QB0HeTWBuvCO1jOqXa0Ec&query=${inputQuery}&sortBy=${sortBy}&sortOrder=asc`

        //Using to axios to get data from api
        axios.get(api_url)
            .then(res => {
                //Stroing response into state
                this.setState({ foods: res.data.foods });
                if(res.data.foods.length === 0)
                alert("Try different keyword");
            })

    }

    render() {
        return (
            <div className="search-body">
                <div className="search-shade">
                <p className="h1 text-left p-5 text-white-50 font-weight-bold">Search Food</p>
                <div className="container pt-5">
                    <div className="row pl-5 pr-5">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="inputQuery" className="h3 text-white font-weight-bold">Food Item</label>
                            <input type="text" className="form-control" id="inputQuery" name="inputQuery" placeholder="Enter food to search" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="sortBy" className="h3 text-white font-weight-bold">Sort By</label>
                            <select className="form-control" id="sortBy" name="sortBy">
                                <option>FDC Id</option>
                                <option>Published Date</option>
                            </select>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-center pr-5">
                        <button className="btn btn-success btn-lg  mt-3 mr-3" onClick={this.handleClick}>Search</button>
                    </div>
                </div>

                <div className="container">
                    {   
                        //Mapping each food returns are query result
                        this.state.foods.map((item,i) => (
                            <ShowFood key={i} foodItem={item}/>
                        ))
                    }
                </div>
            </div>
            </div>

        )
    }
}
