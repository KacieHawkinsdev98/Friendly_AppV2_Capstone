import axios from 'axios';
import {Component} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'





class ViewProfiles  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profiles: {}

         }
    }

    
 componentDidMount(){
     this.getUsers();
 }

  async getUsers(){
    let response = await axios.get('http://127.0.0.1:8000/users/');
      this.setState({
    profiles: response.data
 });

  }

    render() {
        return (
  <>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand >Find New Friends! </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/signup">Home</Nav.Link>
              <Nav.Link href="/discovernewfriends" onClick={this.getUsers}>Discover Friends</Nav.Link>
              <Nav.Link href="/manageprofile">Edit Profile</Nav.Link>
              <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
          
<div>
<ul>
<li>
    
        Kacie | <a href="/friend/add/Kacie/">add as friend</a> | <a href="/follower/add/Kacie/">follow user</a>
    
</li>

<li>
    
        kaciehawkins | <a href="/friend/add/kaciehawkins/">add as friend</a> | <a href="/follower/add/kaciehawkins/">follow user</a>
    
</li>

<li>
    
        Bart | <a href="/friend/add/Bart/">add as friend</a> | <a href="/follower/add/Bart/">follow user</a>
    
</li>

<li>
    
        khawk90 | <a href="/friend/add/khawk90/">add as friend</a> | <a href="/follower/add/khawk90/">follow user</a>
    
</li>

<li>
    
        kellyH | <a href="/friend/add/kellyH/">add as friend</a> | <a href="/follower/add/kellyH/">follow user</a>
    
</li>

<li>
    
        RaeM | <a href="/friend/add/RaeM/">add as friend</a> | <a href="/follower/add/RaeM/">follow user</a>
    
</li>

<li>
    
        Yeezy | <a href="/friend/add/Yeezy/">add as friend</a> | <a href="/follower/add/Yeezy/">follow user</a>
    
</li>

<li>
    
        KimK | <a href="/friend/add/KimK/">add as friend</a> | <a href="/follower/add/KimK/">follow user</a>
    
</li>

<li>
    
        CharlieB | <a href="/friend/add/CharlieB/">add as friend</a> | <a href="/follower/add/CharlieB/">follow user</a>
    
</li>

<li>
    
        Pennywisedaclown | <a href="/friend/add/Pennywisedaclown/">add as friend</a> | <a href="/follower/add/Pennywisedaclown/">follow user</a>
    
</li>

<li>
    
        FredF | <a href="/friend/add/FredF/">add as friend</a> | <a href="/follower/add/FredF/">follow user</a>
    
</li>

<li>
    
        kaciehawkins2 | <a href="/friend/add/kaciehawkins2/">add as friend</a> | <a href="/follower/add/kaciehawkins2/">follow user</a>
    
</li>

<li>
    
        kaciehawkins3 | <a href="/friend/add/kaciehawkins3/">add as friend</a> | <a href="/follower/add/kaciehawkins3/">follow user</a>
    
</li>

<li>
    
        kaciehawkins4 | <a href="/friend/add/kaciehawkins4/">add as friend</a> | <a href="/follower/add/kaciehawkins4/">follow user</a>
    
</li>

<li>
    
        CarrotCake | <a href="/friend/add/CarrotCake/">add as friend</a> | <a href="/follower/add/CarrotCake/">follow user</a>
    
</li>

<li>
    
        kaciehawk2 | <a href="/friend/add/kaciehawk2/">add as friend</a> | <a href="/follower/add/kaciehawk2/">follow user</a>
    
</li>

<li>
    
        Kaciehawkins45 | <a href="/friend/add/Kaciehawkins45/">add as friend</a> | <a href="/follower/add/Kaciehawkins45/">follow user</a>
    
</li>

<li>
    
        kaciehawkins46 | <a href="/friend/add/kaciehawkins46/">add as friend</a> | <a href="/follower/add/kaciehawkins46/">follow user</a>
    
</li>

<li>
    
        kaciehawkins47 | <a href="/friend/add/kaciehawkins47/">add as friend</a> | <a href="/follower/add/kaciehawkins47/">follow user</a>
    
</li>

<li>
    
        MaggieSimp | <a href="/friend/add/MaggieSimp/">add as friend</a> | <a href="/follower/add/MaggieSimp/">follow user</a>
    
</li>

</ul>
</div>
 

</>

        )
    }
};
       
 
export default ViewProfiles ;