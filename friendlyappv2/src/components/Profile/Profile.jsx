import React, {Component} from 'react';
import './Profile.css';
import { Nav, Navbar, Container, Link} from 'react-bootstrap';




class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          
     
          };
        }

        
    render() { 

        return (  
           <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#profile" w="100" >Friendly</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#signup">Home</Nav.Link>
      <Nav.Link href="#discoverfriends">Discover Friends</Nav.Link>
      <Nav.Link href="#manageprofile">Edit Profile</Nav.Link>
      <Nav.Link href="#logout">Log Out</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

           </div>


  

    
        );
}
}
 
export default Profile;