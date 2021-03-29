import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'


class BandsContainer extends Component {

  renderBands() {
    return this.props.bands.map(band => <li>{band}</li>)
  }

  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
