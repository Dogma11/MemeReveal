import ReactPlayer from 'react-player'
import React from 'react';
import './App.css';

class MemePlayer extends React.Component {
    render() {
      return (
        <div className="meme-player">
            <h6>{this.props.name}</h6>
            <ReactPlayer url={this.props.url} playing = {this.props.playing} playbackRate />
        </div>
      );
    }
}

export default MemePlayer