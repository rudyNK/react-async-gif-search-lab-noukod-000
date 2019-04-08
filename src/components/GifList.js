import React from 'react';
export default class GifList extends React.Component {

  render() {
    return(
      <ul>
        {this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url}></img></li>)}
      </ul>
    )
  }
}