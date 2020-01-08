import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './UserSeedInput.css';

class UserSeedInputComponent extends Component {
  render() {
    return (
        <div className="userseed-input-container">
            <FormGroup controlId="formControlsSelect">
             <ControlLabel>User's Seed</ControlLabel>
             <FormControl componentClass="select" value={this.props.userSeed} onChange={this.props.updateSeed}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
             </FormControl>
            </FormGroup>
        </div>

    );
  }
}

export default UserSeedInputComponent;
