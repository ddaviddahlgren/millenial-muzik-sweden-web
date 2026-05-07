import { useState } from "react";

export default function ArtistReleases({ artist }) {
  const [newOrLate, setNewOrLate] = useState("newest");

  const sortedReleases = artist.releases
    .slice()
    .sort((a, b) => {
      if (newOrLate === "newest") {
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      }
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });

  return (
    <>
      <ul className="artist-container">
        <h5>{artist.name}</h5>
        {artist.releases.length > 1 &&
        <div className="new-late">
          <button
            className={newOrLate === "newest" ? "active" : ""}
            onClick={() => setNewOrLate("newest")}
          >
            NEWEST
          </button>

          <button
            className={newOrLate === "latest" ? "active" : ""}
            onClick={() => setNewOrLate("latest")}
          >
            OLDEST
          </button>
        </div>
        }

        <div className="releases">
          {sortedReleases.map((release, i) => (
            <div className="release" key={i}>
              <h6>{release.releaseName}</h6>

              {release.artwork && (
                <img src={release.artwork} className="cover-art" />
              )}

              <p className="release-date">Release date: {release.releaseDate}</p>

              {release.tracks.map((track, i) => (
                <li key={i}>
                  <p id="track-info">
                    <strong>{track.id} -</strong>
                    {track.name} - {track.length}
                  </p>
                </li>
              ))}

              <p>Listen here:</p>
              <div className="listen-links">
                {release.links.spotify && (
                  <a href={release.links.spotify} target="_blank">Spotify</a>
                )}
                {release.links.appleMusic && (
                  <a href={release.links.appleMusic} target="_blank">Apple Music</a>
                )}
                {release.links.youTube && (
                  <a href={release.links.youTube} target="_blank">YouTube</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}
