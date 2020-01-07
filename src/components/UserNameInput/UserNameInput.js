import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './UserNameInput.css';

class SentenceSelectComponent extends Component {
  render() {
    return (
        <div className="sentence-select-container">
            <FormGroup controlId="formControlsSelect">
             <ControlLabel>UserName</ControlLabel>
             <FormControl componentClass="select" value={this.props.numSentences} onChange={this.props.updateSentences}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
             </FormControl>
            </FormGroup>
        </div>

    );
  }
}

export default SentenceSelectComponent;
