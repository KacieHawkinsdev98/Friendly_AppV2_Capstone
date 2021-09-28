import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import UploadPhoto from './ProfilePic'; 
import InterestsCheckbox from './InterestsCheckboxes'
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
            interests: "",//[]?
            foodPreferences: "",
            friends: "", //{[]}?
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
      let response = await axios.post('http://127.0.0.1:8000/profile',user);
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
       <UploadPhoto/>
    </div>
    <div className="py-2">
        <div className="row py-2">
            <div className="col-md-6"> 
            <label >Location</label> 
            <input type="text" 
            className="bg-light form-control" 
            onChange={this.handleChange}
            value={this.location}
            ></input>
            </div>
            <div className="col-md-6 pt-md-0 pt-3"> 
            <label >Bio</label> 
            <textarea className="form-control" rows="5" id="comment"></textarea>
            <input
            onChange={this.handleChange}
            value={this.bio}
            />
            </div>
        </div>
        <InterestsCheckbox/>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Food Preferences
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item value={this.foodPreferences} onChange={this.handleChange}>Vegan</Dropdown.Item>
    <Dropdown.Item value={this.foodPreferences} onChange={this.handleChange}>Vegitarian</Dropdown.Item>
    <Dropdown.Item value={this.foodPreferences} onChange={this.handleChange}>I Eat Everything</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          
           
</div>
<div className="checkbox">
  <label><input type="checkbox" value={this.interests}/>Sporting Events</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value={this.interests}/>Concerts</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value={this.interests}/>Food</label>
</div>
</div>
        <div    className="py-3 pb-4 border-bottom"> 
        <button className="btn btn-primary mr-3" type="submit" >Save Changes</button>
        <button className="btn border button">Cancel</button> 
        </div>
        <div className="d-sm-flex align-items-center pt-3" id="deactivate"> 
            <div> <b>Deactivate your account</b>
            </div>
            <button className="btn btn-danger mr-3" type="submit" >Deactivate</button>
            </div>
        </div>
    
   
  
        )};
  
        
}
 
export default UpdateProfile;