import React, { Component } from 'react';
import axios from 'axios'




class InterestsCheckbox extends Component {


    state = {
      issportingEvents: false,
      isconcerts_Musicfestivals: false,
      isoutdoorActivities: false,
      isArt: false,
      isDining: false
    };
  
   
    onChangeSportingEvents = () => {
      this.setState(initialState => ({
        issportingEvents: !initialState.issportingEvents,
      }));
    }
  
    onChangeconcerts_Musicfestivals = () => {
      this.setState(initialState => ({
        isconcerts_Musicfestivals: !initialState.isconcerts_Musicfestivals,
      }));
    }
  
    onChangeoutdoorActivities = () => {
      this.setState(initialState => ({
        isoutdoorActivities: !initialState.isoutdoorActivities,
      }));
    }
  
    onChangeArt = () => {
      this.setState(initialState => ({
        isArt: !initialState.isArt,
      }));
    }
  
    onChangeDining = () => {
      this.setState(initialState => ({
        isDining: !initialState.isDining,
      }));
    }
  
 
    onSubmit = (e) => {
      e.preventDefault();
  
      let checkArray = [];
      for (var key in this.state) {
        if (this.state[key] === true) {
          checkArray.push(key);
        }
      }
  
      let checkData = {
        checkbox: checkArray.toString()
      };
  
      axios.post('http://127.0.0.1:8000/api/auth/profile/', checkData)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
    }
  
    render() {
      return (
        <div className="InterestsCheckboxes">
          <h2>Interests</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  checked={this.state.issportingEvents}
                  onChange={this.onChangeSportingEvents}
                  className="form-check-input"
                />
                Sporting Events
              </label>
            </div>
  
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  checked={this.state.isconcerts_Musicfestivals}
                  onChange={this.onChangeconcerts_Musicfestivals }
                  className="form-check-input"
                />
                Concerts/Music Festivals
              </label>
            </div>
  
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  checked={this.state.isoutdoorActivities}
                  onChange={this.onChangeoutdoorActivities}
                  className="form-check-input"
                />
                Outdoor Activities
              </label>
            </div>
  
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  checked={this.state.isArt}
                  onChange={this.onChangeArt}
                  className="form-check-input"
                />
                Art
              </label>
            </div>
  
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  checked={this.state.isDining}
                  onChange={this.onChangeDining}
                  className="form-check-input"
                />
                Dining
              </label>
            </div>
  
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default InterestsCheckbox;