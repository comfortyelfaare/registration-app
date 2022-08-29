import {useContext, useEffect, useState } from "react"
import {Link,useNavigate} from 'react-router-dom'

function Login(){
const navigate= useNavigate();
const { success, loading, user} = useContext();
const [email, useEmail]= useState("");
const [password, usePassword]= useState("");
 

  useEffect(() => {
     if (success) {
        navigate("/")
     }
    
  }, [success])

  return (
    <form className="form">
    <div>
      <div className="form-group">
        <label htmlFor="emai">email</label>
         <input type="email" className="form-control" placeholder="enter email" value={email} />
        </div>
        <div className="form-group">
        <label htmlFor="password">password</label>
         <input type="password" className="form-control" placeholder="********" value={password}/>
        </div> 
        <button type="submit">
        
        
        </button>
        <div className="row">
        <Link to="/register">
        Register
         </Link>
        </div>
    </div>
    </form>
    
  );
}

export default Login;