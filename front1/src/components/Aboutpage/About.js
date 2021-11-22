import React from 'react'
import Header from '../Homepage/Header';
import './About.css'

function About() {
    window.history.pushState(null, document.title, window.location.href);
    let i='&';
    
    return (
        <div className="maindiv">
            
            <Header/>
            <div className="aboutmain">
            <h1>About-US</h1>
            <br/>
            
		            <p className="p1">B{i}B(Bed {i} Breakfast) is an app that facilitates college students to book their hostel rooms.
           The App will provide the complete details of the hostel room. 
           Through B{i}B App, it will be easier for the students to have a complete overview of the room beforehand. 
           Students can choose their room based on ratings and other features.</p>

            </div>
            
                
        </div>
        
    )
}

export default About
