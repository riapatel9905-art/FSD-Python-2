import {use, useState} from "react";
import axios from "axios";
export default function Client()
{
    const[username,setusername]=useState("");
    const[message,setmsg]=useState("");
    const handlesubmit=async(e)=>
    {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/signup",{username,message});
            alert(`welcome ${username}!`)
            setusername("");
            setmsg("");
        }
        catch(e)
        {
            console.log(e)
        }
    }
        return(<>
        <form onSubmit={handlesubmit}>
            <input placeholder="username" value={username} onChange={(e)=>
            {
                setusername(e.target.value)
            }}/>
            <textarea value={message} onChange={(e)=>
            {
                setmsg(e.target.value)
            }}/>
            <input type="submit"/>
            </form></>)
    }
