import React from 'react'
import Header from './Header'
import Section from './Section'


function Homepage() {
    window.history.pushState(null, document.title, window.location.href);
    return (
        <div>
            <Header/>
            <Section/>
             
        </div>
    )
}

export default Homepage
