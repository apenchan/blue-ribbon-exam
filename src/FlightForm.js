import React, { Component } from 'react';

class FlightForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      from:'',
      to:'',
      departureTime: '',
      landingTime: '',
      price: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    console.log(e.target.id)
    this.setState({[e.target.id]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addFlight(this.state)
    this.setState({from:'', to: '', departureTime: '', landingTime: '', price:''})
  }
  render(){
    return(
      <form className="flight-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="from" className="item-input" id="from" value={this.state.from} onChange={this.handleChange}/>
        <input type="text" placeholder="to"className="item-input" id="to" value={this.state.to} onChange={this.handleChange}/>
        <input type="text" placeholder="Departure Time" className="item-input" id="departureTime" value={this.state.departureTime} onChange={this.handleChange}/>
        <input type="text" placeholder="Landing Time" className="item-input" id="landingTime" value={this.state.landingTime} onChange={this.handleChange}/>
        <input type="text" placeholder="Price in Dollars" className="item-input" id="price" value={this.state.price} onChange={this.handleChange}/>
        <button type="button" onClick={this.handleSubmit} value="submit">Submit</button>
      </form>
    )
  }
} 

export default FlightForm;