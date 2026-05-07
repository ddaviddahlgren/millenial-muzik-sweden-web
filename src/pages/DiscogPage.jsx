import { useEffect, useState } from "react";
import ArtistReleases from "../components/ArtistReleases";

export default function DiscogPage({ artists }) {

  return (
    <>
      <h1>ALL RELEASES</h1>
      <p id="italic">Each individual box is scrollable.</p>
      <div className="all-releases">
        {artists.map((artist, i) => (
            <ArtistReleases key={i} artist={artist} />
        ))}
        
      </div>
    </>
  );
}
