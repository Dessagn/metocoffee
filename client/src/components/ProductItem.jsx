import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-md-4 product">
                <div className="well">
                <img className="img-responsive img-fluid img-thumbnail mx-auto d-block" src={this.props.product.img} alt=""/>
                <h3> { this.props.product.title } </h3>
                <h4> { this.props.product.description } </h4>
                <p></p>
                <p></p>
                <h3>Net Weight: {this.props.product.netWeight}</h3>
                <h4>Price: {this.props.product.price} </h4>
                </div>
            </div>
        );
    }
}

export default ProductItem;