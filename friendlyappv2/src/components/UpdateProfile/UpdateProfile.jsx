import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
// import './UpdateProfile.css';



class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {},
            birthDate: "",
            location:"",
            imageUpload: {},
            bio: "",
            interests: "",
            foodPreferences: "",
            friends: "", 
        }
    }
 
      
 
 
    handleChange = (event) => {
    console.log (event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
        

    })
 };


 handleSubmit = (event) => {
    event.preventDefault();
    var user ={
        birth_date: this.state.birthDate,
        location: this.state.location,
        image: this.state.imageUpload,
        bio: this.state.bio,
        interests: this.state.interests,
        food_preferences: this.state.foodPreferences,
        friends: this.state.friends,

    }
    this.updateUser(user)
 };


    async updateUser(user) {
        console.log(user)
      try{
      let response = await axios.post('http://127.0.0.1:8000/api/auth/profile/',user);
      console.log(response.data)
    }
      catch (ex) {
         console.log('There was an error!');

        }          
    } 

    render() {
        return ( 

            <div>
          <form onSubmit={this.handleSubmit}/>
        <div className="wrapper bg-white mt-sm-5">
    <h4 className="pb-4 border-bottom">Manage Profile</h4>
    <div className="d-flex align-items-start py-3 border-bottom"> 
    {/* <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" classNameName="img" alt=""> */}
        <div className="pl-sm-4 pl-2" id="img-section"> <b>Profile Photo</b>
        <button className="btn button border"><b>Upload</b></button>
        </div>
    </div>
    <div className="py-2">
        <div className="row py-2">
            <div className="col-md-6"> 
            <label for="location">Location</label> 
            <input type="text" 
            className="bg-light form-control" 
            onChange={this.handleChange}
            value={this.location}
            ></input>
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label for="bio">Bio</label> 
            <textarea class="form-control" rows="5" id="comment"></textarea>
            <input type="text" 
            className="bg-light form-control" 
            onChange={this.handleChange}
            value={this.bio} 
            ></input>
            </div>
        </div>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Food Preferences
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Vegan</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Vegitarian</Dropdown.Item>
    <Dropdown.Item href="#/action-3">I Eat Everything</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
           <div>
            <input type="text" 
            className="bg-light form-control" 
            onChange={this.handleChange}
            value={this.foodPreferences}
            ></input> 
            </div>
            <div className="col-md-6 pt-md-0 pt-3">

            <label>Interests</label> 

            <input type="checkbox"
            onChange={this.handleChange}
            value={this.interests}
            ></input>
            <label className="form-check-label" for="flexCheckDefault">concerts</label>
            </div>
        </div>
        <div className="row py-2">
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
  </div>
        </div>
        <div    className="py-3 pb-4 border-bottom"> 
        <button className="btn btn-primary mr-3" type="submit" >Save Changes</button>
        <button className="btn border button">Cancel</button> 
        </div>
        <div className="d-sm-flex align-items-center pt-3" id="deactivate"> 
            <div> <b>Deactivate your account</b>
            </div>
            <div className="ml-auto"> <button className="btn danger">Deactivate</button>
            </div>
        </div>
    </div>
   
  
        )};
  
        
}
 
export default UpdateProfile;