import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const {push} = useHistory()
  const handleChange = evt => {
    const {name, value} = evt.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const loginSubmit = evt => {
    evt.preventDefault()
    axios
      .post("http://localhost:5000/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4"
      })
      .then(res => {
        console.log(res)
        window.localStorage.setItem("token", res.data.payload);
        push('/bubble-page')
      })
      .catch(err =>{
        console.log("wrong route", err)
      })

  }

  return (
    <div className="logging-in">
      <form onSubmit={loginSubmit}>
        <label>Username</label>
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="your username"
        />
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="your password"
        />
      <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
