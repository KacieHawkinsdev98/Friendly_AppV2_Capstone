import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Signup from './SignUp/SignUp';
import Profile from './Profile/Profile';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import ViewProfiles from './UserProfilesPage/UserProfilesPage';
import jwtDecode from "jwt-decode";
import PageNotFound from './PageNotFound.jsx/PageNotFound';




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

    const user = this.state.user;
   
     return (

        <div className="App">
          
    <Router>
    <Switch>
       <Route path='/profile' render={props => {
         if (!user){
           return <Redirect to="/" />;
         } else {
           return <Profile {...props} user={user} />
         }
       }}
       />
       <Route exact path="/" component={Login}  />
       <Route path="/signup" component={Signup}  />
       <Route path="/manageprofile" component={UpdateProfile} />
       <Route path="/discovernewfriends" component={ViewProfiles} />
       <Route path="/not-found" component={PageNotFound} />
       <Redirect to="/not-found"/>

    </Switch>
    </Router>
    </div>
    
        );
}}



export default App;
 
