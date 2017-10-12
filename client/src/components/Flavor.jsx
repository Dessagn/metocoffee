import React, { Component } from 'react';

class Flavour extends Component {
    render() {
        return (
            <div className="flavor">
                <div className="container">
                <div className="flavor-description">
                    <h1>Meto Coffee Flavors</h1>
                    <hr/>
                    <p>
                    We provide two flavors of superior quality coffee, one with Sweet apple, grape and the other with Juicy peach, apricot flavour. In staying with our high quality standards, our coffee base is created using only the finest Arabica beans, roasted fresh daily, include flavors for year-round classics as well as seasonal and holidays. Each flavor tells its own story.
                    </p>
                </div>
                <div className="row products-list is-flex">
                    <div className="col-sm-6">
                        <div className="well test_item fix">
                            <div className="item-image">
                                <img src="./images/test-img1.jpg" alt="" className="img-circle"/>
                            </div>
                            <div className="item_text">
                                <h3><strong>Sweet Apple & Grape flavor</strong></h3>
                                <hr/>
                                <p>
                                A slight pinch of grapy taste with sweet apple combination. The beans have a sweet syrupy body that give it the caramel apple pie natural flavor.
                                <br/>
                                It is 100% organic forest coffe that is garanteed to make the difference in your taste.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="well test_item fix">
                            <div className="item-image">
                                <img src="./images/test-img2.jpg" alt="" className="img-circle"/>
                            </div>
                            <div className="item_text">
                                <h3><strong>Juicy Peach & Apricot flavor</strong></h3>
                                <hr/>
                                <p>
                                With this flavor you can taste a hint of juicy peach and apricot combination. The beans have a sweet syrupy body that give the natural flavor.
                                <br/>
                                It is grown by generations of coffee growing farmers and comes to you directly from the farmland without any intermediary.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Flavour;