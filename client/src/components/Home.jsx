import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
                <div className="home-content">
                <div className="hero">
                    <h3><strong>We deliver</strong> </h3>
                    <h1>Best Quality</h1>
                    <h3>&</h3>
                    <h1>Organic Ethiopian Especiality Coffee</h1>
                    <p>We grow and deliver natural forest coffee from farm to your coffee shops, with no third party involvement. We proudly serve especiality coffee to all our customers.</p>
                    <a href="/about"><button className="btn btn-primary">Learn More about us</button></a>
                    <a href="/contact"><button className="btn btn-primary">Contact us</button></a>
                </div>
            </div>

        );
    }
}

export default Home;