import logo from './logo.svg';
import './App.css';
import SearchBar from '../App/SearchBar/SearchBar.js';
import SearchResults from '../App/SearchResults/SearchResults.js';
import Playlist from '../App/Playlist/Playlist.js';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <!-- Add a SearchBar component -->
        <div className="App-playlist">
          <!-- Add a SearchResults component -->
          <!-- Add a Playlist component -->
        </div>
      </div>
    </div>
  );
}

export default App;
