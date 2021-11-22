import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './owner.css'
// import App from './App';
function Ownerdetails() {
    window.history.pushState(null, document.title, window.location.href);
    const [owner,setOwner] = useState({
        hostelname:'',
        ownername:'',
        address:'',
        email:'',
        phone:'',
        noofrooms:'',
        vacantrooms:'',
        roomtype:'',
        rent:''
    })
    const handleChange=(event)=>{
        const { name, value } = event.target
        setOwner({
            ...owner,
            [name]: value
        })
    }
    const hostel=()=>{
        
        const{hostelname,ownername, address,email,phone,noofrooms,roomtype,rent,vacantrooms}=owner
        if(hostelname&&ownername&&address&&email&&phone&&noofrooms&&vacantrooms&&roomtype&&rent)
        {
            axios.post("http://localhost:8080/api/owners", owner)
            .then( res => {
                alert("owner registered successfully.......")
            })
        } 
        else {
            alert("invalid input")
        }  
    }
    return (
        <div>
            <div className="addDetails">
            <div className="addDetil">
                <br/>
            <h1 style={{color:"white",textAlign:"center",fontFamily:'sans-serif'}}>Add Hostel Details</h1>
           
                <section>
                    <input class="owner" type="text" name ="hostelname"value ={owner.hostelname}  placeholder="Hostel Name" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner"type="text"  name ="ownername"value ={owner.ownername} placeholder="Owner Name" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text"  name ="address"value ={owner.address} placeholder="Address" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text"  name ="email"value ={owner.email} placeholder="Email" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text"  name ="phone"value ={owner.phone} placeholder="Phone" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text"  name ="noofrooms"value ={owner.noofrooms} placeholder="No of rooms" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text"  name ="vacantrooms"value ={owner.vacantrooms} placeholder="Vaccant rooms" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text" name ="roomtype" value ={owner.roomtype} placeholder="Type of Room" onChange={handleChange}/>
                </section>
                <section>
                    <input class="owner" type="text" name ="rent" value ={owner.rent} placeholder="Rent" onChange={handleChange}/>
                </section>
                <section class="ownerbutton">
                    <button class="obutton"onClick={hostel}>ADD</button>
                    <button  class="obutton"><Link to ="/"><p style={{color:'black'}}>CANCEL</p></Link></button>
                </section>
            </div>
            
        </div>
        {/* <App/> */}
        </div>
    )
}

export default Ownerdetails
