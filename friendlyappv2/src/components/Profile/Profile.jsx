import React, {Component} from 'react';
import Login from '../Login';
import './Profile.css';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          
     
          };
        }

        
    



    render() { 

        return (  
           <div>

             <h1>this is the profile page</h1>
        
            
           <ul className="nav flex-column">
  <li className="nav-item">
    <div className="nav-link active" />
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/profile">Discover Friends</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/updatemyprofile">Edit Profile</a>
  </li>
  </ul>
        </div>
        );
    }
}
 
export default Profile;