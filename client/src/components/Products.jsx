import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ActionCall from './ActionCall';
import Flavor from './Flavor';

class Products extends Component {
     products = [
         {
            "title": "Medium Roasted Ground Coffee",
            "netWeight": "1kg",
            "img": "./images/img11.jpg",
            "description": "Meto Organic, Especiality coffee. Net weight is 1kg. You can choose light roasted, medium roasted or dark roasted on order. You can also buy only roasted beans.",
            "price": "$49.90, or 180.0 AED",
        },
        {
            "title": "Medium Roasted Ground or Beans",
            "netWeight": "12kg",
            "img": "./images/image2.jpg",
            "description": "Meto Organic, Especiality coffee. Net weight 12kg. You can choose light roasted, medium roasted or dark roasted on order. You can also order only roasted beans.",
            "price": "$490, or 1800 EAD",
        },
        {
            "title": "Green Coffee Beans",
            "netWeight": "60kg",
            "img": "./images/img33.jpg",
            "description": "Meto Organic, Especiality coffee. Net weight 60kg. Forest coffee green beans. You can order in any amount you need. ",
            "price": "starting from 4200 AED",
        }
     ];
    render() {
        const productItem = this.products.map((product) => {
            return(
                <ProductItem product = {product} key={product.title} />
            );
        });
        return (
            <div>
            <div className="product-page">
                <div className="container">
                <div className="products-description">
                    <h1>Our Coffee</h1>
                    <hr/>
                    <p>
                    Superior high quality Coffee roasted and packaged carefully so that it maintains maximum taste and flavor. Our Coffee is organic, Green forest Coffee. It comes to you direct Trade from the farm-lands, originating from Kebena Kossa and Lema Edeto, Limmu Ethiopia. The coffee is grown by second generation coffee growers. The elevation at this point is 21000 meters above sea-level.
                    </p>
                </div>
                <div className="row products-list is-flex">
                    {productItem}
                </div>
                </div>
            </div>
            <ActionCall />
            <Flavor />
            </div>
        );
    }
}

export default Products;