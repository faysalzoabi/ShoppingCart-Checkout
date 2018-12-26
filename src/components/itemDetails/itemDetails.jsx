import React, { Component } from 'react'
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export class itemDetails extends Component {

 state = {
     open:false
 }

 handleClick = () => {
     this.setState({ open:!this.state.open  });
 }
  render() {
    return (
      <div>
        <Button 
          className="item-detail-button" 
          bsStyle="link"
          onClick={this.handleClick}
          >
            {this.state.open === false ? `See`:`Hide`} item details
            {this.state.open === false ? ' +': ` -`}
        </Button>
        <Collapse in={this.state.open}>
            <div>
                <Well>
                    <Media>
                        <Media.Left>
                            <img
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src="https://i5.walmartimages.com/asr/f9c3bfa1-92f4-45c0-b49e-97726d716990_1.8f26d7c5bc472a527fc02bba96e14566.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                            />
                        </Media.Left>
                        <Media.Body>
                            <p>Essential by OFM-2006 Racing style leather chair Gaming, Red</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>{`$ ${this.props.price}`}</strong>
                                    <br/>
                                    <strong className="price-strike">{`$ ${this.props.price}`}</strong>
                                </Col>
                                <Col md={6}>
                                    Qty : 1 
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Well>    
            </div>
        </Collapse>
      </div>
    )
  }
}

export default itemDetails
