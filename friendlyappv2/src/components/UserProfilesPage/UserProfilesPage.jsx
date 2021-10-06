import axios from 'axios';
import {Component} from 'react'





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
    let response = await axios.get('http://127.0.0.1:8000/users');
      this.setState({
    profiles: response.data
 });

  }

    render() {
        return (
  
            <h1> List of Profiles </h1>
        )
    }
};
       
 
export default ViewProfiles ;