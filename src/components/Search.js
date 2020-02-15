import React, { Component } from 'react'

class Search extends Component {
  handleChange = event => {
    const { target: { value } } = event
    const { filterImages } = this.props
    filterImages(value)
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search your interesting gif..." onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Search