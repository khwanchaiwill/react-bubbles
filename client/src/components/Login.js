import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom';


class Login extends React.Component {
  constructor(){
    super()
    this.state ={
      credentials: {
        username: "",
        password: ""
      }
    }
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

handleChange = evt => {
    const {name, value} = evt.target;
    this.setState({
      credentials: {
        ...this.state.credentials,
        [name]: value
      }
     
    })
  }

  loginSubmit = evt => {
    evt.preventDefault()
    axios
      .post("http://localhost:5000/api/login", this.state.credentials
       
      )
      .then(res => {
        console.log(res)
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push('/bubble-page')
      })
      .catch(err =>{
        console.log("wrong route", err)
      })

  }
render(){
  return (
    <div className="logging-in">
      <form 
        className="login-form"
        onSubmit={this.loginSubmit}>
          <label>Username</label>
          <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="your username"
          />
        <input 
          type="password"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
          placeholder="your password"
        />
      <button>Login</button>
      </form>
    </div>
  );
}
};

export default Login;
