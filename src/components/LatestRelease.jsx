const LatestRelease = () => {
  return (
    <>
      <div className="container" id="latest-release">
        <h3>. Latest release</h3>
        <iframe
          data-testid="embed-iframe"
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/album/3mlbqWPyjbpxsHzias3sJ5?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default LatestRelease;
