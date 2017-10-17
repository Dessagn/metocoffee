import React, { Component } from 'react';
import TourInclude from './TourInclude';

class Tour extends Component {
    render() {
        return (
            <div className="tour">
                <div className="container">
                    <h1>ETHIOPIA  COFFEE ORIGIN TOUR</h1>
                    <div className="row">
                        <div className="tour-description col-md-6">
                            <a href="/contact"><h3>Ethiopia Coffee Origin Tour – 6 days / 6 nights</h3></a>
                            <p>Addis Ababa – Visit 2 coffee farms and varies coffee processing centers – Experience Ethiopian culture – Discover the wonderful nature and mountains of Ethiopia.</p>
                            <p>Ethiopian is believed to be the birthplace of coffee. This tour is an adventure through woderful nature and mountains of Ethiopia where forest coffee is actually grown</p>
                            <div className="push-center">
                                <strong>Tour Day: </strong><span> December 4, 2017</span>
                                <a href="/contact" rel="noopener noreferrer" className="btn btn-info btn-md">Register now</a>
                            </div>
                        </div>
                        <div className="col-md-6 video">
                            <iframe title="limu coffee" width="100%" height="280" src="https://www.youtube.com/embed/pLs_4C0kzAI?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                        </div>

                    </div>

                    <div className="tour-days-list">
                        <h2>Tour Info day by day</h2>
                        <hr/>
                        <h4>Click on each day to see the details</h4>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-primary">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="panel-heading ph-custom" role="tab" id="headingOne">
                                <h4 className="panel-title">

                                    Day 1: Arrival and Addis Ababa City Tour

                                </h4>
                                </div>
                                </a>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className=" col-sm-6">
                                            <img  className="img img-responsive" src="./images/restaurante.jpeg" alt=""/>
                                        </div>
                                        <div className="day-content col-sm-6">
                                            <p>From Dubai International airport, we start our journey at 8:30am. </p>
                                            <p>Arrival at Bole International airport is about 12:30pm and transfer to our hotel. After some rest, we will visit the capital city Addis Ababa National Museum. Dinner will be at Cultural Ethiopian restaurant <a href="http://www.2000habesha.com/fnb.html" rel="noopener noreferrer" target="_blank">2000Habesha</a></p>
                                        </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="panel-heading ph-custom" role="tab" id="headingTwo">
                                <h4 className="panel-title">

                                    Day 2: Addis Ababa to Jimma

                                </h4>
                            </div>
                            </a>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className=" col-sm-6">
                                            <img  className="img img-responsive" src="./images/jimma.jpeg" alt=""/>
                                        </div>
                                        <div className="day-content col-sm-6">
                                        <p>In the morning, we depart from Addis to Jimma on our way to tour the coffee farms. The flight from Addis Ababa to Jimma is at 9:00am </p>
                                        <p>
                                            Arrival at Jimma will be 11:45am and we directly go to Dololo Hotel. In the afternoon after lunch, we visit Jimma Coffee Research Center.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="panel-heading ph-custom" role="tab" id="headingThree">
                            <h4 className="panel-title">

                                Day 3: Journey Jimma to Limu

                            </h4>
                            </div>
                            </a>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className=" col-sm-6">
                                <img  className="img img-responsive" src="./images/coffeebeans.jpeg" alt=""/>
                            </div>
                            <div className="day-content panel-body">
                            <p>
                            On the 3rd day of our tour, we set off to Limu for farm visit. At Limu, we will first visit coffee dry mill. Then in the afternoon, 3 hours visit of Lema Edeto Coffee farm.
                            </p>
                            <p>We will be spending the night at the farm site and sleep in a tent. Lunch and Dinner will be provided at the farm site.</p>
                        </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <div className="panel-heading ph-custom" role="tab" id="headingTwo">
                                <h4 className="panel-title">

                                    Day 4: Lema Edeto Farm Tour

                                </h4>
                            </div>
                            </a>
                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                <div className="day-content panel-body">
                                    <div className="row">
                                    <div className=" col-sm-6">
                                        <img  className="img img-responsive" src="./images/coffeedry.jpeg" alt=""/>
                                    </div>
                                        <div className="col-sm-6">
                                        <p>On our second day on the farm site, we will continue the visit of Lema Edeto Coffee farm site.  </p>
                                        <p>We will be spending the night at the farm site and sleep in a tent. Lunch and Dinner will be provided at the farm site.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <div className="panel-heading ph-custom" role="tab" id="headingTwo">
                                <h4 className="panel-title">

                                    Day 5: Kebena Kossa Farm Tour

                                </h4>
                            </div>
                            </a>
                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div className="day-content panel-body">
                                    <div className="row">
                                        <div className=" col-sm-6">
                                            <img  className="img img-responsive" src="./images/img111.jpg" alt=""/>
                                        </div>
                                        <div className="col-sm-6">
                                        <p>After a breakfast at the farm site, we will continue Kebena Kossa farm</p>
                                        <p>Tour of Kebena Kossa Farm and then visiting the local coffee washing station. In the afternoon, we will return to Jimma and arrive at our Hotel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <div className="panel-heading ph-custom" role="tab" id="headingTwo">
                                <h4 className="panel-title">

                                    Day 6: Jimma to Addis Ababa

                                </h4>
                            </div>
                            </a>
                            <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                <div className="day-content panel-body">
                                    <div className="row">
                                    <div className=" col-sm-6">
                                            <img  className="img img-responsive" src="./images/addis-storage.jpeg" alt=""/>
                                        </div>
                                        <div className="col-sm-6">
                                        <p>On the final leg of our tour, we will return to Addis Ababa in the morning. </p>
                                        <p>Then in the afternoon, we will visit ECX (Ethiopian Commodity Exchange) center and the coffee Dry Mill processing center. Then finally we will be back at our Hotel.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            <div className="panel-heading ph-custom" role="tab" id="headingTwo">
                                <h4 className="panel-title">

                                    Day 7: Addis Ababa To Dubai

                                </h4>
                            </div>
                            </a>
                            <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                                <div className="day-content panel-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <p>Flight back to Dubai. You can also stay in Addis for a while and enjoy the city's sites and culture</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>






                        {/* <div className="tour-days row">
                            <div className="days col-md-6">
                                <div className="well">
                                    <h4>Day 1: Arrival and Addis Ababa City Tour </h4>
                                    <p>From Dubai International airport, we start our journey at 8:30am. </p>
                                    <p>Arrival at Bole International airport is about 12:30pm and transfer to hotel. After some rest, we will visit the capital city Addis Ababa National Museum. Dinner will be at Cultural Ethiopian restaurant <a href="http://www.2000habesha.com/fnb.html" rel="noopener noreferrer" target="_blank">2000Habesha</a></p>
                                </div>

                            </div>
                            <div className="days col-md-6">
                            <div className="well">
                                <h4>Day 2: Addis Ababa to Jimma </h4>
                                <p>In the morning, we depart from Addis to Jimma on our way to tour the coffee farms. The flight from Addis Ababa to Jimma is at 9:00am </p>
                                <p>
                                    Arrival at Jimma will be 11:45am and we directly go to Dololo Hotel. In the afternoon after lunch, we visit Jimma Coffee Research Center.
                                </p>
                            </div>
                            </div>
                            <div className="days col-md-6">
                                <div className="well">
                                <h4>Day 3: Journey Jimma to Limu </h4>
                                <p>
                                    On the 3rd day of our tour, we set off to Limu for farm visit. At Limu, we will first visit coffee dry mill. Then in the afternoon, 3 hours visit of Lema Edeto Coffee farm.
                                </p>
                                <p>We will be spending the night at the farm site and sleep in a tent. Lunch and Dinner will be provided at the farm site.</p>
                                </div>
                            </div>
                            <div className="days col-md-6">
                                <div className="well">
                                    <h4>Day 4: Lema Edeto Farm Tour </h4>
                                    <p>On our second day on the farm site, we will continue the visit of Lema Edeto Coffee farm site.  </p>
                                    <p>We will be spending the night at the farm site and sleep in a tent. Lunch and Dinner will be provided at the farm site.</p>
                                </div>
                            </div>
                            <div className="days col-md-6">
                                <div className="well">
                                    <h4>Day 5: Kebena Kossa Farm Tour </h4>
                                    <p>After a breakfast at the farm site, we will continue Kebena Kossa farm</p>
                                    <p>Tour of Kebena Kossa Farm and then visiting the local coffee washing station. In the afternoon, we will return to Jimma and arrive at our Hotel</p>
                                </div>
                            </div>
                            <div className="days col-md-6">
                                <div className="well">
                                    <h4>Day 6: Jimma to Addis Ababa </h4>
                                    <p>On the final leg of our tour, we will return to Addis Ababa in the morning. </p>
                                    <p>Then in the afternoon, we will visit ECX (Ethiopian Commodity Exchange) center and the coffee Dry Mill processing center. Then finally we will be back at our Hotel.</p>
                                </div>
                            </div>
                            <div className="days col-md-6">
                                <div className="well">
                                    <h4>Day 7: Addis Ababa To Dubai </h4>
                                    <p>Flight back to Dubai. You can also stay in Addis for a while and enjoy the city's sites and culture</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <TourInclude />
                    <div className="video-text row">
                        <div className="col-sm-12 col-xs-12 col-md-6">
                            <p><strong>Meto Coffee</strong> which is one of the Limu Coffee varieties comes from Limu, Lema Edeto and Kebena Kossa farms which are one of our main places we conduct our tour. </p>
                            <p><strong>Meto Coffee</strong> as it comes from Limu, is grown at elevations ranging from 3,600 to 6,200 feet in southwest/southcentral Ethiopia producing medium-sized coffee beans with a distinctive roundish shape and green color</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;