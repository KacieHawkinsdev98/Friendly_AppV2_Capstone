import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Signup from './SignUp/SignUp';
import Profile from './Profile/Profile';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import jwtDecode from "jwt-decode";




class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
       
      };
  
    }


    componentDidMount() {
      const jwt = localStorage.getItem("token");
      try {
          const user = jwtDecode(jwt);
          this.setState({
              user,
          });
          console.log(user);
      } catch {}
  }

   render() {
   
     return (

        <div className="App">
    <Router>
     <Switch>
     
       <Route exact path="/" component={Login}  />
       <Route path="/signup" component={Signup}  />
       <Route path="/profile" component={Profile} exact/> 
       <Route path="/updatemyprofile" component={UpdateProfile} />

    </Switch>
    </Router>
    </div>
    
        );
}}



export default App;
 
