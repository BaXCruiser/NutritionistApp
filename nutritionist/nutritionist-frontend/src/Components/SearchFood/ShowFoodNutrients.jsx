import React, { Component } from 'react'

export default class ShowFoodNutrients extends Component {


    render() {
        return (
            <div className="card-body">
                {
                    this.props.foodNutri.slice(0, 20).map((nutrient , i) => (
                        <div className="row text-center">
                            <div className="col-md-4">
                                <p className="text-secondary mb-1">Nutrient Name</p>
                                <p>{nutrient.nutrientName}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-secondary mb-1">Value</p>
                                <p>{nutrient.value}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-secondary mb-1">Unit</p>
                                <p>{nutrient.unitName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

