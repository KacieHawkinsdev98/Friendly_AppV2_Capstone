import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         };
    

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

async userLogin(user){
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login', user).then((res) => {
        localStorage.setItem("token", res.data.access)
    });
   
}
    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
            
     };

    handleSubmit = (event) => {
        event.preventDefault();
        var user = {
            username: this.state.username,
            password: this.state.password
        };
        this.userLogin(user)
        this.setState({
            token: user
        })

        alert('you have sucessfully logged in');
    }

     render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
        <label>Login</label>
        <label>Username</label>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
        <label>Password</label>
        <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
        <button type="submit">Login</button>
        </form>
         );
    }
}
 
export default Login;