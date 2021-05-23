import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track.js'; 

export class TrackList extends React.Component() {
    render() {
        const trackList = this.props.tracks.map(track => 
            <Track 
                track={track}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval} />
            )
        return (
            <div className="TrackList">
                {trackList}
            </div>
        );
    }
}