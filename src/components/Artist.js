import React, { Component } from "react";
import * as api from "../api/api";
import "../style/Artist.css";

import twitter from "../assets/twitter.png";
import spotify from "../assets/spotify.png";

class Artist extends Component {
  state = {
    isLoading: true,
    isError: "",
    artist: {}
  };

  render() {
    const { isLoading, artist } = this.state;
    return (
      <div>
        {Object.keys(artist).length !== 0 && (
          <div className="Artist">
            <img
              src={artist.imageurl}
              alt="artist"
              className="artistpage-profile-image"
            />
            <div className="artistpage-artist-name">{artist.name}</div>
            <div className="artistpage-artist-description">
              {artist.description}
            </div>
            <a
              href={`https://twitter.com/${artist.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" className="artistpage-twitter" />
            </a>
            <a href={`${artist.spotifyartisturl}`}>
              <img src={spotify} alt="" className="artistpage-spotify" />
            </a>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArtist();
    this.setState({ isLoading: false });
  };

  fetchArtist = () => {
    const { artist_id } = this.props;
    api
      .getArtistById(artist_id)
      .then(({ data }) => this.setState({ artist: data.results }))
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Artist;
