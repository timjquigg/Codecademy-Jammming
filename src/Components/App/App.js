import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist.js';
import React from 'react';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: ''},
        {artist: ''},
        {album: ''},
        {id: ''}
      ],
      playlistName: '',
      playlistTracks: [
        {name: ''},
        {artist: ''},
        {albums: ''},
        {id: ''}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({
        playlistTracks:[...this.state.playlistTracks, track]
      });
    }
  }

  removeTrack(trackToRemove) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(track =>{
        return track !== trackToRemove.target.value
      })
    })  
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
