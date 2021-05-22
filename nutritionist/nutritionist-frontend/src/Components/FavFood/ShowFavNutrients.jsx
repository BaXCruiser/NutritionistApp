import React, { Component } from 'react'

export default class ShowFavNutrients extends Component {
    render() {
        return (
            <div class="card-body">
                {
                    this.props.foodNutri.map((nutrient) => (
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
