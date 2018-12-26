import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';

export class TaxesFees extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
            <Col md={6}>Est. taxes & fees (Based on 94500)</Col>
            <Col md={6}>{`$ ${this.props.taxes}`}</Col>
        </Row>
      </div>
    )
  }
}

export default TaxesFees
