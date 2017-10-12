import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="myFooter">
                    <div className="container first-bar">
                        <div className="row">
                        <div className="col-sm-3">
                            <h5>Meto Coffee</h5>
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/">Downloads</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <hr className="hidden-md hidden-lg"/>
                            <h5>Location</h5>
                            <p>
                            Meto Coffee Roasting and Packaging,
                            <br/>
                            Dubai Investment park-2,
                            <br/>
                            DUBAI, UAE
                            <br/>
                            <a href="tel: +971 56 236 7998">Tel: +971 56 236 7998</a>
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <hr className="hidden-md hidden-lg"/>
                           <h5>Opening Hours</h5>
                                <p>
                                    Mon - Thu: 8AM - 6PM
                                    <br/>
                                    Fri: 12AM - 6PM
                                    <br/>
                                    SAT - SUN: 8AM - 6PM
                                </p>
                        </div>
                        <div className="col-sm-3 info">
                            <hr className="hidden-md hidden-lg"/>
                            <h5>Information</h5>
                            <p>Meto Coffee is a company located in Dubai and especializes in delivering Organic Ethiopian Especiality Coffee. We sale ground and packaged coffee, Roasted coffee beans or Green coffee beans. For more information, please send us a message <a className="here" href="/contact">here</a> </p>
                        </div>
                        </div>
                    </div>
                    <div className="second-bar">
                        <div className="container">
                        <h4 className="logo"><a href="/"> Meto Coffee</a></h4>
                            <div className="social-icons">
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/metoGreenCoffee" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/metoCoffee/" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC5NukewdRDsLyBv5vOSJ0kg" className="google"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    </footer>
            </div>
        );
    }
}

export default Footer;