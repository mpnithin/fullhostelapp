import React from 'react'
import Header from '../Homepage/Header'
import './Contact.css'

function Contact() {
    window.history.pushState(null, document.title, window.location.href);
    return (
        <div className="contactdiv">
            
        <Header/>
        <div className="contactmain">
            <p>
            <h3>
            In case of any concerns contact us on
                +91-80-61561990
            </h3><br/>OR<br/>
            <h3><br/><p>Write to us :<a href="mailto:nithinp826@gmail.com">&nbsp;Send a Email<br/></a></p></h3>
            </p>
        </div>
        
            
    </div>
    )
}

export default Contact
