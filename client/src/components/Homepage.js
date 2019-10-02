import React, { Component } from 'react';
import {Parallax,Row,Col } from 'react-materialize';


class Homepage extends Component {
   
    render() {
        return (
            <div>
                <Parallax image={<img src={"./images/pt.jpg"} alt={""} />} />
                    <div className="section #DCDCDC">
                        <div className="row container">
                            <h1 style={{
                                textAlign:'center',
                                fontSize: '100px'
                                }}
                                className="header">
                            Koffee
                            </h1>
                            <ul className="collection"></ul>
                            
                            <br/>
                            <br/>
                            <Row>
                                <Col s={4}>
                                    <h2 style={{
                                    textAlign:'center',
                                    }}>
                                        Local.
                                    </h2>
                                    <ul className="collection"></ul>
                                    <h5>Lorem ipsum dolor amet hexagon shabby chic keytar officia magna, drinking vinegar before they sold out distillery quis poke fixie beard. Quinoa deep v distillery small batch blog, you probably haven't heard of them snackwave cronut wayfarers. 90's vape sustainable voluptate, gochujang cornhole actually tumblr hammock mlkshk kombucha jean shorts. Yuccie butcher raclette tumeric labore. Chicharrones marfa lorem selvage pop-up. Lo-fi cronut deserunt, sint austin chia aliquip literally swag voluptate try-hard.</h5>
                                </Col>
                                <Col s={4}>
                                    <h2 style={{
                                        textAlign:'center',
                                        }}>
                                        Organic.
                                    </h2>
                                    <ul className="collection"></ul>
                                    <h5>Ad yuccie readymade kombucha hoodie. Echo park vaporware squid fixie. Williamsburg typewriter exercitation umami lomo echo park. Marfa raw denim portland street art cray. Man braid aliqua cillum, ugh irony culpa ut. Meggings pabst in squid jianbing. Cardigan flexitarian organic direct trade ut cloud bread deep v before they sold out.</h5>    
                                </Col>
                                <Col s={4}>
                                    <h2 style={{
                                        textAlign:'center',
                                        }}>
                                          Fair Trade.
                                    </h2>
                                    <ul className="collection"></ul>
                                    <h5>Sunt wayfarers unicorn tofu farm-to-table officia neutra small batch everyday carry fixie, hoodie ut. Fingerstache flexitarian succulents forage irony occupy heirloom whatever ut helvetica. XOXO vape labore palo santo laborum, pug street art quinoa. Occaecat pinterest kombucha biodiesel. Reprehenderit viral mlkshk, selfies hammock XOXO dolore. Celiac kitsch roof party stumptown.</h5>
                                </Col>
                            </Row>
                        </div>
                    </div>
                <Parallax image={<img src={"./images/p2.jpg"} alt={""}/>} />
            </div>   
        );
    }
}

export default Homepage;