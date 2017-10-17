import React, { Component } from 'react';

class ActionCall extends Component {
    render() {
        return (
            <section id="contact" className='action bg-primary roomy-40'>
                <div className="container">
                    <div className="row">
                        <div className="main-action">
                            <div className="col-md-8">
                                <div className="action-item text-center">
                                    <h2>We accept orders of large quantities for businesses. Call us, we deliver!</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="action-btn text-left sm-text-center">
                                    <a href="whatsapp://send?text=Hello, &phone=+971562367998" className="call btn btn-default btn-lg">
                                        <i className="fa fa-whatsapp whatsapp"></i>&nbsp;
                                        +971-56-236-7998
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ActionCall;