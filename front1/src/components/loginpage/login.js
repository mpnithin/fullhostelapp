import React from 'react'
import '../Homepage/Section.css'
import {useState} from 'react'
import { BrowserRouter, useHistory } from "react-router-dom"
// import { Link } from "react-router-dom";
import axios from 'axios'
const Login=()=>{
    let history = useHistory();
    const [login,setLogin]=useState({
        username:'',
        password:''
    })
    const handleChange1=(event)=>{
        const { name, value } = event.target
        setLogin({
            ...login,
            [name]: value
        })
    }
    const demo=()=>
    { 
        const{username,password}=login
        if(username&&password)
        {
            axios.post("http://localhost:8080/api/auth/signin",login)
            .then( (res) => 
            {
                alert(res.data.message)
                    if(res.data.message==="login successfull")
                    {
                        console.log("sucess")
                        console.log(res)
                        if(res.data.roles[0].name=='owner')
                        {
                            history.push("/Ownerdetails")
                            
                        }
                        else if(res.data.roles[0].name=='student')
                           
                            history.push("/Studentpage")
                    }
            })
        } 
                else {
                     alert("invalid user")
                    }
    }
    return (
        <div className="main">
                    <h1 style={{color:'white'}}>Login</h1>
                     
                            <input className="input1" type="text" name="username" placeholder="Username" value ={login.username}  onChange={ handleChange1}/>
                             <input className="input1" type="text" name="password" placeholder="Password" value ={login.password}   onChange={ handleChange1}/>
                         <button className="button1" onClick={demo}  >Submit</button>
                </div>
    )
}
export default Login
