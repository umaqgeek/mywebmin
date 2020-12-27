import React from 'react';
import './Pricing3.css';
import { Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';


class Pricing3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Pricing 3</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Pricing 3</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
				
                {/* main body */}
                <Row>
                    <Col xl={4} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-3 h-100 card">
                            <CardBody>
                                <h5 className="card-title">BASIC</h5>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$100</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> 20 post jobs</li>
                                        <li><i className="fa fa-check"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> 20 invite candidates</li>
                                        <li><i className="fa fa-check"></i> 20 post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="pt-2 btn-wrap">
                                    <Button href="javascript:void(0)" className="button btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-3 theme-bg h-100 card">
                            <CardBody>
                                <h5 className="card-title">PREMIUM</h5>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$150</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> 35 post jobs</li>
                                        <li><i className="fa fa-check"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> 35 invite candidates</li>
                                        <li><i className="fa fa-check"></i> 35 post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="pt-2 btn-wrap">
                                    <Button href="javascript:void(0)" className="button gray btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} sm={6} className="mb-30">
                        <Card className="card-statistics pricing-card pricing-card-style-3 h-100 card">
                            <CardBody>
                                <h5 className="card-title">STANDARD</h5>
                                <div className="pricing-content">
                                    <div className="price">
                                        <h2>$250</h2>
                                        <p>/ Monthly</p>
                                    </div>
                                    <ul className="py-2">
                                        <li><i className="fa fa-check"></i> Unlimited post jobs</li>
                                        <li><i className="fa fa-check"></i> advanced instructors search</li>
                                        <li><i className="fa fa-check"></i> Unlimited invite candidates</li>
                                        <li><i className="fa fa-check"></i> Unlimited post events</li>
                                        <li><i className="fa fa-check"></i> cancel any time</li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="pt-2 btn-wrap">
                                    <Button href="javascript:void(0)" className="button btn btn-secondary btn-md">purchase</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Pricing3;