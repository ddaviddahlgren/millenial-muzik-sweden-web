import LatestRelease from "../components/LatestRelease";
import News from "../components/News";

const HomePage = () => {
  return (
    <>
      <div className="site-content">
        <News />
        <LatestRelease />
      </div>
      <div className="hero">
        <h4>Socials</h4>
        instagram, osv.
      </div>
    </>
  );
};

export default HomePage;
