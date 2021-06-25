import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: '',
            hasSearched: false,
            searchOffset: 0
        }
        
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.increaseOffset = this.increaseOffset.bind(this);
        this.decreaseOffset = this.decreaseOffset.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term, this.state.searchOffset)
        this.setState({hasSearched: true});
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value,
            hasSearched: false,
            searchOffset: 0});
    }

    displayNavigation() {
        if(!this.state.hasSearched){
            return(
                <button
                    className="SearchButton"
                    onClick={this.search} >SEARCH</button>
            )
        } else {
            if(this.state.searchOffset === 0) {
                return(
                    <button
                        className="SearchButton"
                        onClick={this.increaseOffset} >Next</button>
                );
            }
            if(this.state.searchOffset >= 20 && this.state.searchOffset <= 1000) {
                return(
                    <div>
                        <button
                            className="SearchButton"
                            onClick={this.decreaseOffset} >Previous</button>
                        <button
                            className="SearchButton"
                            onClick={this.increaseOffset}>Next</button>
                    </div>
                )
            }
            if(this.props.searchOffset === 1000) {
                return (
                    <button
                        className="SearchButton"
                        onClick={this.decreaseOffset} >Previous</button>
                )
            }
        }
    }

    increaseOffset() {
        this.setState({searchOffset: this.state.searchOffset +20}, () => {
            this.search()
        });
    }

    decreaseOffset() {
        this.setState({searchOffset: this.state.searchOffset -20}, () => {
            this.search()
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    placeholder="Enter A Song, Album, or Artist"
                    onChange={this.handleTermChange} />
               {this.displayNavigation()}
            </div>
        );
    }
}

export default SearchBar;