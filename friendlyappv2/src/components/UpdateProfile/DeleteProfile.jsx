import React from 'react';
import axios from 'axios';

class DeleteRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            status: null
        };
    }

    componentDidMount() {
        // Simple DELETE request with axios
        axios.delete('http://127.0.0.1:8000/api/auth/user')
            .then(() => this.setState({ status: 'Delete successful' }));
    }

    render() {
        const { status } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header"></h5>
                <div className="card-body">
                    Status: {status}
                </div>
            </div>
        );
    }
}

export { DeleteRequest }; 


