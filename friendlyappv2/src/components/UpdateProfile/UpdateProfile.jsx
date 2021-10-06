import React, { Component } from 'react';
import axios from 'axios';
import { Form, Card, Button, Col, Image } from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';
import DeleteRequest from './DeleteProfile';
import './UpdateProfile.css'




class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      imageUpload: null,
      bio: "",
      favorite_activity: "",
      favorite_food: "",

    }
  }


  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,


    })
  };


  handleSubmit = (event) => {
    event.preventDefault();
    var user = {
      location: this.state.location,
      image: this.state.imageUpload,
      bio: this.state.bio,
      favorite_food: this.state.favorite_food,
      favorite_activity: this.state.favorite_activity,


    }
    this.updateUser(user)

  };


  async updateUser(user) {
    console.log(user)
    try {
      let response = await axios.post('http://127.0.0.1:8000/profile/', user);
      console.log(response.data)
    }
    catch (ex) {
      console.log('There was an error!');

    }
  }


  render() {

    return (

      <>
        <h1 className="text=center mb-7" className="fst-italic" >Friendly</h1>

        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Manage Profile</h2>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group id="img-section" >
                <Col s={6} md={6}>
                  <Image src="holder.js/500x550" roundedCircle />
                </Col>
                <Form.Label>Profile Photo</Form.Label>
                <b></b>
                <Form.Control
                  type="file" name="image" accept="image/png, image/jpeg"
                  onChange={this.handleChange}
                  value={this.state.imageUpload} />
              </Form.Group>
              <br></br>
              <Form.Group id="location">
                <Form.Label>Location</Form.Label>
                <b></b>
                <br></br>
                <Autocomplete
                  apiKey={"AIzaSyAOX0tmkMiG1G5PdGu86dqGqOZdEmFv4fg"}
                  onPlaceSelected={(place) => console.log(place)}
                  name="location"
                  onChange={this.handleChange}
                  value={this.state.location}
                />
              </Form.Group>
              <Form.Group id="comment">
                <Form.Label>Bio</Form.Label>
                <b></b>
                <Form.Control
                  rows="5"
                  type="text" name="bio"
                  onChange={this.handleChange}
                  value={this.state.bio} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Favorite Activity</Form.Label>
                <b></b>
                <Form.Control
                  type="text" name="favorite_activity"
                  onChange={this.handleChange}
                  value={this.state.favorite_activity} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Favorite Food</Form.Label>
                <b></b>
                <Form.Control
                  type="text" name="favorite_food"
                  onChange={this.handleChange}
                  value={this.state.favorite_food} />
              </Form.Group>
              <br></br>
              <Button className="w-30" type="submit">
                Update
              </Button>
              <Button className="w-30" variant="danger" onClick={DeleteRequest} >
                Delete Profile
              </Button>
              <Button className="w-20" variant="warning" size="md"
                href="/profile" >
                Go Back
              </Button>
            </Form>
          </Card.Body>
        </Card>

      </>


    );
  }
}

export default UpdateProfile;