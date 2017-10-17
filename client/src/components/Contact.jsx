import React, { Component } from 'react';
import TourInclude from './TourInclude';

class Contact extends Component {
     render() {
        return (
            <div className="contact">
                <div className="container extend">
                    <div className="form-row1">
                    <h3>Register for Ethiopia Coffee Origin Tour</h3>
                    <hr/>
                </div>
                </div>

                <div className="form-row">
                <div className=" push-in container">
                        <h4>The tour is packaged at $1,450.00 per person, and it includes all the essential services required for the tour, including transportations, visas and food services. Other optional and personal activities will not be included in this tour package.</h4>
                        <h5>Register below for the tour and we will contact you. It is important that your email and telephone numbers are correctly entered. You can also provide us with additional information if you have special requests for the duration of the tour.</h5>
                    </div>
                <div className="row container-form container">
                    <form action="/contact/sendMessage" method="post" data-toggle="validator" className="form-horizontal">
                        <p className="push-left"><strong>Fields marked <span style={{color:'red'}}>*</span> are required </strong></p>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="first_name" className="col-sm-3 control-label">First Name <span style={{color:'red'}}>*</span></label>
                            <div className="col-sm-9">
                                <input id="first_name" type="text" name="first_name" placeholder="First Name" className="form-control" required/>
                            </div>
                            </div>

                            <div className="form-group">
                            <label htmlFor="last_name" className="col-sm-3 control-label">Last Name <span style={{color:'red'}}>*</span></label>
                            <div className="col-sm-9">
                                <input id="last_name" type="last_name" name="last_name" placeholder="Last Name" className="form-control" required/>
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="email" className="col-sm-3 control-label">Email <span style={{color:'red'}}>*</span></label>
                            <div className="col-sm-9">
                                <input id="email" type="email" name="email1" placeholder="Email" data-error="Email format not valid" className="form-control" required/>
                                <div className="help-block with-errors"></div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="email" className="col-sm-3 control-label">Retype Email <span style={{color:'red'}}>*</span></label>
                            <div className="col-sm-9">
                                <input id="email" type="email" name="email2" placeholder="Retype email" data-error="Email format not valid" className="form-control" required/>
                                <div className="help-block with-errors"></div>
                            </div>
                            </div>


                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="telephone" className="col-sm-3 control-label">Phone Number <span style={{color:'red'}}>*</span></label>
                            <div className="col-sm-9">
                                <input id="tel" type="text" name="telephone" placeholder="Phone number" data-error="Phone number not valid" className="form-control" required/>
                                <div className="help-block with-errors"></div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="textarea" className="col-sm-3 control-label">Message</label>
                            <div className="col-sm-9">
                                <textarea id="textarea" name="message" rows="5" placeholder="Write your message here ..." className="form-control" ></textarea>
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-9">
                                <button type="submit" className="submit btn btn-md btn-primary pull-right">Submit</button>
                            </div>
                            </div>
                        </div>
                    </form>

                </div>
                </div>
                <div className="container">
                    <TourInclude />
                </div>

                <div className="location">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="well">
                                    <h3>Location</h3>
                                    <hr/>
                                    <h4>Meto Coffee Roasting and Packaging</h4>
                                    <h5> Dubai Investment park-2,</h5>
                                    <h3>Dubai, UAE</h3>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="well">
                                    <h3>Opening Hours</h3>
                                    <hr/>
                                    <p>We are open during the following hours every week</p>
                                    <h5><strong>Mon - Thu:</strong>  8am - 6pm</h5>
                                    <h5><strong>Fri: </strong>  12am - 6pm</h5>
                                    <h5><strong>Sat - Sun: </strong>  8am - 6pm</h5>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="well">
                                    <h3>Contact us</h3>
                                    <hr/>
                                    <h5><a href="tel: +971 56 236 7998">
                                   <i className="fa fa-lg fa-phone">&nbsp; +971 56 236 7998</i>
                                    </a></h5>

                                    <p className="loong"><a href="email: metogreen@outlook.com">
                                        <i className="fa fa-lg fa-envelope-o"> &nbsp;metogreen(at)outlook.com</i>
                                    </a></p>

                                    <div className="social-icons">
                                        <a href="whatsapp://send?text=Hello, &phone=+971562367998">
                                        <i style={{color:'green', 'fontSize': '36px'}} className="fa fa-lg fa-whatsapp"></i>
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/metoCoffee/" className="facebook"><i className="fa fa-lg fa-facebook"></i></a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC5NukewdRDsLyBv5vOSJ0kg" className="google"><i className="fa fa-lg fa-youtube"></i></a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/metoGreenCoffee" className="twitter"><i className="fa fa-lg fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="map-title">
                    <div className="container">
                    <h4>We are in Dubai city. Find us on map, or drop us a message to have a taste of Ethiopian Especiality Coffee</h4>
                    </div>
                </div>
                <div className="map"><iframe title="iframe title" width='100%' height="450" frameBorder="0" style={{border:0}}src="https://www.google.com/maps/embed/v1/search?q=Dubai%2C%20UAE&key=AIzaSyAkVqWZkQIknNqAK1tnkn4o5q2v4anvr8k&zoom=15" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default Contact;