export default function ContactPage({allCountries}){

    return (
        <>
            <h1>CONTACT US</h1>
        <div className="site-content">
            <div className="container">
                <h4>
                    Want to release your music with us?
                </h4>
                <p><strong>We offer services in music production, mixing, mastering as well as artwork and distribution.</strong>
                </p>
                <p id="contact-text">Our view of this industry is that it is still mainly controlled by mass media, major labels and distributors, who will only be likely to bet on you if you are willing to make yourself fit the mold. 
                    Millenial Muzik Sweden is and has always been an outlet for free creativity and unhinged expression. If you want to experience that freedom with your music, drop us a line and let's see what we can do!
                </p>
                <p id="contact-text">Kind regards,</p>
                <p id="contact-text">David Dahlgren</p>
            </div>
            <p id="arrows">&#x21AD;</p>
            <div className="container">
                <h4>
                    Fill out this form:
                </h4>
                <form action="https://formsubmit.co/hej@millenialmuzik.se" 
                      id="contact-form" 
                      method="POST"
                      onSubmit={() => {
                        setTimeout(() => {
                            document.getElementById("contact-form").reset()
                        }, 200);
                      }}>
                    <label htmlFor="name"><strong>Name: </strong></label>
                    <input type="text" placeholder="Type in a name here" name="name"/>
                    <label htmlFor="email"><strong>E-mail: </strong></label>
                    <input type="text" placeholder="Type in a valid e-mail address" name="email"/>
                    <label htmlFor="country"><strong>Country: </strong></label>
                    <select name="country" id="country">
                        <option value="select">Select country</option>
                        {allCountries.map((country, i) => (
                            <option value="country" key={i}>{country.name}</option>
                        ))}
                    </select>
                    <label htmlFor="subject"><strong>Subject: </strong></label>
                    <select name="subject" id="subject">
                        <option value="subject">Select a subject</option>
                        <option value="distribution">Distribution</option>
                        <option value="mixing">Mixing</option>
                        <option value="mastering">Mastering</option>
                        <option value="other">Other inquiries</option>
                    </select>
                        
                    <label htmlFor="name"><strong>Message: </strong> </label>
                    <textarea name="message" id="message" maxLength={350} placeholder="State your business here"></textarea>
                    <button type="submit">SUMBIT FORM</button>
                </form>
            </div>
            </div>
        </>
    )
}