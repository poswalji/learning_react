import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";
function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
e.preventDefault()
setUser({username,password})

    }
    return(
        <div>
            <h2>log in</h2>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)} }        placeholder="username"></input>
        {" "}
             <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)} }  placeholder="password"></input>
              {" "}
             <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
export default Login