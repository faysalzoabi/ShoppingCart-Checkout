import React, { Component } from 'react'
import {Button, Collapse, Well, Form, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleChange } from '../../store/actions'


class PromoCode extends Component {

    state = {
        open:false,
        disabledPromoButton: false,
    }

  handleClick = () => {
      this.setState({ open:!this.state.open  });
  }

    handleChange = (e) => {
        this.props.dispatch(handleChange(e))
    }

  giveDiscountHandler = () => {
      if(this.props.promoCode === 'DISCOUNT') {
          this.props.discountHandler()
          this.setState({ 
            disabledPromoButton: true  
            });
      }
  }
  render() {
    return (
      <div>
        <Button className="promo-code-button"
                bsStyle="link"
                onClick={this.handleClick}
                >
                {this.state.open === false ? `Apply ` : `Hide `}
                promo code
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            <ControlLabel>Promo Code</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Promo Code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange}
                                            />
                                            <br/>
                                            <Button
                                            block
                                            bsStyle="success"
                                            className="btn-round"
                                            disabled={this.state.disabledPromoButton}
                                            onClick={this.giveDiscountHandler}
                                            >
                                            Apply
                                            </Button>
                                           
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </Well>
                    </div>
                </Collapse>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    promoCode:state.value
})
export default connect(mapStateToProps)(PromoCode)
