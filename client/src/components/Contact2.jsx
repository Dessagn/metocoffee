import React, { Component } from 'react';
import TourInclude from './TourInclude';

class Contact2 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: ''
        };
    }
    handleClick = () => {
        this.setState({
            display: 'none'
        });
    };
     render() {
        return (
            <div className="contact">
                <div className="form-row1">
                    <h3>Register for Ethiopia Coffee Origin Tour</h3>
                    <hr/>
                    <div style={this.state} className="container confirm row">
                        <div className="col-xs-12">
                            <div className="well">
                                <h2 onClick={this.handleClick}>&times;</h2>
                                <h3>Thank you for Registering</h3>
                                <p>We will contact you back shortly. Remember, You can also call us or send us a message on whatsApp</p>
                                <h5><a href="whatsapp://send?text=Hello, &phone=+971562367998">
                                   <i className="fa fa-lg fa-whatsapp">&nbsp; +971 56 236 7998</i>
                                    </a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="container push-in">
                        <h4>Please fill the form below for the tour and we will contact you. It is important that your email and telephone numbers are correctly entered. You can also provide us with additional information if you have special requests for the duration of the tour.</h4>
                    </div>
                </div>
                <div className="form-row">
                <div className="row container">
                    <form action="/contact/sendMessage" method="post" data-toggle="validator" className="form-horizontal">
                        <p className="push-left"><strong>Fields marked <span style={{color:'red'}}>*</span> are required </strong></p>
                        <div className="form-group">
                        <label htmlFor="first_name" className="col-sm-3 control-label">First Name <span style={{color:'red'}}>*</span></label>
                        <div className="col-sm-8">
                            <input id="first_name" type="text" name="first_name" placeholder="First Name" className="form-control input-lg" required/>
                        </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="last_name" className="col-sm-3 control-label">Last Name <span style={{color:'red'}}>*</span></label>
                        <div className="col-sm-8">
                            <input id="last_name" type="last_name" name="last_name" placeholder="Last Name" className="form-control input-lg" required/>
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Email <span style={{color:'red'}}>*</span></label>
                        <div className="col-sm-8">
                            <input id="email" type="email" name="email1" placeholder="Email" data-error="Email format not valid" className="form-control input-lg" required/>
                            <div className="help-block with-errors"></div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="email" className="col-sm-3 control-label">Retype Email <span style={{color:'red'}}>*</span></label>
                        <div className="col-sm-8">
                            <input id="email" type="email" name="email2" placeholder="Retype email" data-error="Email format not valid" className="form-control input-lg" required/>
                            <div className="help-block with-errors"></div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="telephone" className="col-sm-3 control-label">Phone Number <span style={{color:'red'}}>*</span></label>
                        <div className="col-sm-8">
                            <input id="tel" type="text" name="telephone" placeholder="Phone number" data-error="Phone number not valid" className="form-control input-lg" required/>
                            <div className="help-block with-errors"></div>
                        </div>
                        </div>
                        {/*<div className="form-group">
                        <label htmlFor="subject_title" className="col-sm-3 control-label">Message Subject </label>
                        <div className="col-sm-7">
                            <input id="subject_title" type="text" name="subject_title" placeholder="Subject" className="form-control input-lg" required/>
                        </div>
                        </div>
                        */}
                        <div className="form-group">
                        <label htmlFor="textarea" className="col-sm-3 control-label">Message</label>
                        <div className="col-sm-8">
                            <textarea id="textarea" name="message" rows="5" placeholder="Write your message here ..." className="form-control input-lg" required></textarea>
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-8">
                            <button type="submit" className="submit btn btn-primary pull-right">Submit</button>
                        </div>
                        </div>
                    </form>

                </div>
                <div className="container">
                    <TourInclude />
                </div>
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
                                    <h5><a href="whatsapp://send?text=Hello, &phone=+971562367998">
                                    <i className="fa fa-lg fa-whatsapp">&nbsp; +971 56 236 7998</i>
                                     </a></h5>

                                    <p className="loong"><a href="email: metogreen@outlook.com">
                                        <i className="fa fa-lg fa-envelope-o"> &nbsp;metogreen(at)outlook.com</i>
                                    </a></p>

                                    <div className="social-icons">
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/metoGreenCoffee" className="twitter"><i className="fa fa-lg fa-twitter"></i></a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/metoCoffee/" className="facebook"><i className="fa fa-lg fa-facebook"></i></a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC5NukewdRDsLyBv5vOSJ0kg" className="google"><i className="fa fa-lg fa-youtube"></i></a>
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

export default Contact2;