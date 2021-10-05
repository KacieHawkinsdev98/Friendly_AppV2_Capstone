import React, { Component } from 'react';
import axios from 'axios';

class DeleteRequest extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            status: null
        };
    }

    componentDidMount() {
        axios.delete('http://127.0.0.1:8000/delete')
            .then(() => this.setState({ status: 'Delete successful' }));
    }

    

    render() {
        const { status } = this.state;
        return (
            
    
                   
        <div className="d-sm-flex align-items-center pt-3" id="deactivate"> 
            <div> <b>Deactivate your account</b>
            </div>
            <div className="ml-auto"> <button className="btn danger" onClick={status}>Deactivate</button>
            </div>
        </div> 
              
             
        );
    }
}

export default DeleteRequest ; 


