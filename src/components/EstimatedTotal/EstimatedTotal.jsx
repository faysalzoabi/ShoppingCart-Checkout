import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'


export class EstimatedTotal extends Component {
  render() {
    return (
      <div>
        <Row >
            <Col md={6}><h2>Est, Total</h2></Col>
            <Col md={6}><h2>{`$ ${this.props.price}`}</h2></Col>
        </Row>
      </div>
    )
  }
}

export default EstimatedTotal
