import Navigation from "./Navigation"

const Header = () => {
    return (
        <>
        <div className="logo-box">
        <img src="./src/assets/img/mms.png" alt="Millenial Muzik" />
        <img src="./src/assets/img/sweden-logo.png"alt="Sweden" />
        </div>
        <Navigation />
        </>
    )
}

export default Header