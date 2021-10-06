import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

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

  async userLogin(user) {

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', user).then((res) => {
        localStorage.setItem("token", res.data.access)
      });
      console.log(response)
    }
    catch (ex) {
      console.log('There was an error!');

    }

  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

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

  }


  render() {

    return (

      <>
        <h1 className="text=center mb-6">Friendly</h1>

        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={this.handleSubmit}  >
              <Form.Group id="email">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username" name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={this.state.username} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  value={this.state.password} />
              </Form.Group>
              <Button className="w-100" type="submit"
                onClick={() => { this.props.history.push('/profile') }}
              > Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>

      </>


    );
  }
}

export default Login;

