import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login/Login';
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
    <Container className="d-flex align-items-center justify-content-center"
    styles={{ minHeight: "100vh"}}
    >
        <div className="w-100" styles={{ maxWidth: "400px"}}>
   
    <Router>
     <Switch>
       <Route exact path="/" component={Login}  />
       <Route path="/signup" component={Signup}  />
       <Route path="/profile" component={Profile} /> 
       <Route path="/updatemyprofile" component={UpdateProfile} />

    </Switch>
    </Router>
    </div>
    </Container>
        );
}

}

export default App;
 
