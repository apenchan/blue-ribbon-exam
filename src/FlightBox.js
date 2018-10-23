import React, { Component } from 'react';

class FlightBox extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.from}</td><td>{this.props.to}</td><td>{this.props.departureTime}</td><td>{this.props.landingTime}</td><td>${this.props.price}</td>
      </tr>
    )
  }
}

export default FlightBox