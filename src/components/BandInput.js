// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({type: "ADD_BAND", payload: this.state})
    this.setState({
      name: ''
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>name</label>
          <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}


export default connect()(BandInput)
