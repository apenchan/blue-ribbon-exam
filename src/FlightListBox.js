import React, { Component } from 'react';
import FlightBox from './FlightBox'

class FlightListBox extends React.Component{
  renderflights(){
    return this.props.flights.map((flight, index) => <FlightBox key={index}{...flight}/>)
  }
  render(){
    console.log(this.props)
    return(
      <div className="mapped-items">
        <table>
      <tr><th>From</th><th>To</th><th>Departure Time</th><th>Arrival Time</th><th>Price</th></tr>
        {this.renderflights()}
        </table>
      </div>
    )
  }
}

export default FlightListBox;