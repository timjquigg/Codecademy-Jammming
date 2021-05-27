import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Name1',
        artist: 'Artist1',
        album: 'Album1',
        id: 'Id1'},
        {name: 'Name2',
        artist: 'Artist2',
        album: 'Album2',
        id: 'Id2'},
        {name: 'Name3',
        artist: 'Artist3',
        album: 'Album3',
        id: 'Id3'}
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'PlaylistName1',
        artist: 'PlaylistArtist1',
        album: 'PlaylistAlbum1',
        id: 'PlaylistId1'},
        {name: 'PlaylistName2',
        artist: 'PlaylistArtist2',
        album: 'PlaylistAlbum2',
        id: 'PlaylistId2'},
        {name: 'PlaylistName3',
        artist: 'PlaylistArtist3',
        album: 'PlaylistAlbum3',
        id: 'PlaylistId3'}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
        return track.id !== trackToRemove.id
      })
    })  
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
