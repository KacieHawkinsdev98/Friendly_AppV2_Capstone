import React, { Component } from 'react';
import './Profile.css';
import { Nav, Navbar, Container, Card, Button } from 'react-bootstrap';




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
            <Navbar.Brand href="#profile"  >Friendly</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/signup">Home</Nav.Link>
              <Nav.Link href="/discoverfriends">Discover Friends</Nav.Link>
              <Nav.Link href="/manageprofile">Edit Profile</Nav.Link>
              <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>Welcome to the Friendly App!</Card.Title>
            <Card.Text>
              New in town? Looking to connect with locals to explore
              the city with? Look no further! The friendly app curates
              "friend dates" based on your personal interests and finds
              locals in your area to hang with :D
            </Card.Text>
            <Button variant="info" >Find a friend and go take a hike!</Button>
          </Card.Body>
        </Card>


      </div>





    );
  }
}

export default Profile;