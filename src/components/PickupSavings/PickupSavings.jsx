import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

var styles = {
    pickupsavings:{
        textDecoration:'underline'
    },
    totalSavings:{
        color:'red',
        fontWeight:800
    }
}
export class PickupSavings extends Component {
  render() {
      const tooltip =
      <Tooltip id="tooltip">
        <p>Picking up your order</p>
      </Tooltip>
    return (
      <div>
        <Row className="show-grid">
            <Col md={6}>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <div style={styles.pickupsavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col style={styles.totalSavings} md={6}>{`$ ${this.props.price}`}</Col>
        </Row>
      </div>
    )
  }
}

export default PickupSavings
