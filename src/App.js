import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage'
import LoginForm from './LoginForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      authenticated: false,
      loginFalse: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ username: '', password: '' })
    this.checkInputs()
  }
  checkInputs(){
    if(this.state.username === "username" && this.state.password === "password"){
      this.setState({
        authenticated: true
      })
    } else {
      this.setState({
        incorrect: true
      })
    }
  }
  render() {
    console.log(this.state)
    
    return (
      <div className="App">
        {this.state.authenticated == true  ? <Homepage /> : <div className="login-form">
        <form className="add-flight" onSubmit={this.handleSubmit}>
          <input type="text" id="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" id="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form></div>}
      </div>
    );
  }
}

export default App;
