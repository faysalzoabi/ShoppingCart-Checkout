import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/itemDetails/itemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import './App.css';
import { connect } from 'react-redux';
import { handleChange } from './store/actions'

class App extends Component {

  state = {
    total:100,
    PickupSavings:-3.86,
    taxes:0,
    estimatedTotal:0,
  }

  componentDidMount = () => {
    this.setState({ 
      taxes:(this.state.total + this.state.PickupSavings) * 0.0875 
    }, 
      function() {
        this.setState({ 
        estimatedTotal:this.state.total + this.state.PickupSavings + this.state.taxes  
        });
      });
  }

  giveDiscountHandler = () => {
        this.setState({ 
           estimatedTotal :  this.state.estimatedTotal * 0.9
          })
  }

  render() {
    return (
     <div className="contaniner ">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.PickupSavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr/>
          <PromoCode
            estimatedTotal={this.state.estimatedTotal}
            discountHandler={this.giveDiscountHandler}
          />
        </Grid>
     </div>
    );
  }
}
const mapStateToProps = state => ({
  promoCode:state.value
})


export default connect(mapStateToProps, {handleChange})(App);
