import React from 'react';
import FlightForm from './FlightForm';
import FlightListBox from './FlightListBox';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state={flights: []}
    this.addFlight = this.addFlight.bind(this);
  }
  addFlight(flight){
    this.setState({ flights: this.state.flights.concat(flight)})
  }
  render() {
    console.log(this.state.flights)
    return (
      <div className="main-container">
        <FlightForm addFlight={this.addFlight}/>
        {this.state.flights.length > 0 ? <FlightListBox flights={this.state.flights}/>: <h1>No flights listed</h1>}
      </div>
    );
  }
}

export default Homepage;
