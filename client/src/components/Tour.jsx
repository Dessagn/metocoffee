import React, { Component } from 'react';
import TourInclude from './TourInclude';

class Tour extends Component {
    render() {
        return (
            <div className="tour">
                <div className="container">
                    <h1>ETHIOPIA  COFFEE ORIGIN TOUR</h1>
                    <div className="tour-description">
                        <a href="/contact"><h3>Ethiopia Coffee Origin Tour – 7 days / 6 nights</h3></a>
                        <h5>Addis Ababa – Visit 2 coffee farms and varies coffee processing centers – Experience Ethiopian culture – Discover the wonderful nature and mountains of Ethiopia.</h5>
                        <p>Have you ever asked yourself – where does coffee comes from? Well, the popular believe is Ethiopia.
                        This Ethiopian adventure starts and ends in Addis Ababa. Ethiopia is universally referred as the birthplace of coffee – Kaffa region is the original home of the Arabica, which is still growing into the wild in the forest of the highlands.</p>
                        <p>Ethiopian coffee has literally opened the eyes of many coffee professionals. The fruity and floral flavor offered by Ethiopian coffee have widened coffee knowledge all around the world.</p>
                        <div className="push-center">
                        <strong>Tour Day: </strong><span> December 4, 2017</span>
                            <a href="/contact" rel="noopener noreferrer" className="btn btn-info btn-lg">Register now</a>
                        </div>
                    </div>
                    <div className="tour-days-list">
                        <h1>Tour Info day by day</h1>
                        <hr/>
                        <div className="tour-days row">
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
                        </div>
                    </div>
                    <TourInclude />
                    <div className="video-text row">
                        <div className="col-sm-12 col-xs-12 col-md-6">
                            <p><strong>Meto Coffee</strong> which is one of the Limu Coffee varieties comes from Limu, Lema Edeto and Kebena Kossa farms which are one of our main places we conduct our tour. </p>
                            <p><strong>Meto Coffee</strong> as it comes from Limu, is grown at elevations ranging from 3,600 to 6,200 feet in southwest/southcentral Ethiopia producing medium-sized coffee beans with a distinctive roundish shape and green color</p>
                            <p>The farms are quite remote and are approximately a four-hour drive on steep unprepared dirt roads into the mountains. The coffee shrubs are nestled amongst 3040mtr tall trees providing an outstanding microclimate for the coffee growing below.</p>
                            <p>The high elevation, abundant shade from the forest canopy provide delayed ripening, and rich the soil provide an outstanding microclimate for producing exquisite coffee fruit.
                            The cherries are dried naturally on raised beds, located on the farm at its highest point with direct sunlight and clear airflow.</p>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-6">
                            <iframe title="limu coffee" width="100%" height="315" src="https://www.youtube.com/embed/pLs_4C0kzAI?autoplay=0" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;