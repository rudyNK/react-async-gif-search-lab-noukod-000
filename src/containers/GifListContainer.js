import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetchGIFs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        gifs: data.data
      })
      console.log(this.state.gifs)
    })
  }

  render() {
    return(
      <div>
        <GifSearch getGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
