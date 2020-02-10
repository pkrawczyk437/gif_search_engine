import React, { Component }  from 'react'
import '../styles/Images.css'
import giphy from '../importGiphy/importGiphy'
import Search from './Search'

class Images extends Component {
   state = {
     trendingGifs: []
   }

  componentDidMount() {
     giphy.trending({
       limit: 6,
       rating: 'g',
       fmt: 'json'
     }).then(({data})=> this.setState(
       {
         trendingGifs: data,
       }
      ))
  }

  filterImages = value => {
    giphy.search({
      q: value,
      rating: 'g',
      limit: 6
    }).then(({data}) => {
      this.setState({
        ...this.state,
        trendingGifs: data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Search filterImages={this.filterImages}/>
        <div className="giphy-images">
          {Object.keys(this.state.trendingGifs).map((key, index) => (
            <div key={index} className="gif-cards">
              <img src={this.state.trendingGifs[key].images.fixed_height.url} alt="gif"/>
            </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Images