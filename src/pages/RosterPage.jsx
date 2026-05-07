import { useState } from "react";
import { Link } from "react-router-dom";

const RosterPage = ({artists}) => {

  return (
      <>
      <h1>ROSTER</h1>
      <p id="italic">Our current artists.</p>
      <div className="roster">
        {artists.map((artist, i) => (
          <div key={i} className="artist">
            <h4>{artist.name}</h4>
            {/* {artist.image} */}
            <strong>Bio:</strong>
            <p id="bio-text">{artist.bio}</p>
            <div className="links">
            <strong>Links:</strong>
            <a className="arist-links" href={artist.links.spotify} target="_blank">Spotify</a>
            <a className="arist-links" href={artist.links.appleMusic}> Apple Music </a>
            {artist.links.youTube &&
            <a className="arist-links" href={artist.links.youTube}> YouTube </a> }
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RosterPage;
