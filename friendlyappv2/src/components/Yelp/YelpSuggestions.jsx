// import { setItems } from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import {handleYelp} from './httpService';


const baseUrl = "https://api.yelp.com/v3/categories"
const config = {

 headers: {
       'Authorization': `Bearer ${W3XrLQLB5lrKMpr5_-Lyay9fw85wCydkX7o7sVp84O7rhz2okYwIiZmMJOAAXMEFh0sK3oMynliervidcad24Zn7y9ldmOjDMn4qhp6GjSpVim4VXsJ2Ssvqbh1OYXYx}`
         },
          params: {
             location: 'location',
             category: 'bars',
             
            }
      }
     class YelpSuggestions extends Component {
     state= {
        location: '',
        category: '',
       

    }

    componentDidMount(){
        axios.get(`${baseUrl}`,config).then(response => console.log(response))
    }

    handleSearch = async () =>{
        const {data:posts} = await handleYelp(this.state.term, this.state.location);
        this.setState({posts:posts.events});
    }
    handleTerm = event =>{
        this.setState({term: event.target.value})
    }
    handleLocation = event =>{
        this.setState({event: event.target.value})
    }
render(){
    return(
        <div>
            <div input oncChange = {this.handleTerm}></div>
            <div input oncChange = {this.handleLocation}></div>
            <div input oncChange = {this.handleSearch}></div>
            {this.posts.map(post =>
             <div>
             {post.name}
           <img src = {post.image_url}/>
            </div>
    )}
   </div>
    );
      }
    }

    export default YelpSuggestions;




