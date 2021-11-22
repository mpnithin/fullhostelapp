import React from 'react'
import './Section.css'

import Login from '../loginpage/login'
// import Test from '../loginpage/test'
let c='&';
function Section() { 
    return (
        <div className="section1">
                <Login/>
                {/* <Test/> */}
                <div className="description">
                    <p className="text1">
                        A simple app that enables the students to locate hostels and Hostel owners to register their hostels along with its features. 
                    </p>
                </div>  
                <div className="banner">
                    <div ><img className="images" src="/images/img1.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img2.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img3.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img4.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img5.jpeg" alt="img1"/></div>
                    <div ><img className="images" src="/images/img6.jpeg" alt="img1"/></div>
                   
                </div> 
                <footer className="footer">
                    <div>
                        <h2>Bed and Breakfast</h2>
                    </div>
                    <div>
                        <p>
                             Copyright © 2021–2030 B{c}B.com™. All rights reserved. | Privacy policy | Terms of use | Legal
 
                        </p>
                    </div>
                </footer>  
        </div>

    )
}

export default Section
