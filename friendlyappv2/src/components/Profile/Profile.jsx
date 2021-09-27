import React, {Component} from 'react';
import './Profile.css';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            
           
           <ul className="nav flex-column">
  <li className="nav-item">
    <div className="nav-link active" />
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/profile">Discover Friends</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/manageprofile">Edit Profile</a>
  </li>
  </ul>
        
        );
    }
}
 
export default Profile;