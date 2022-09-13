import React from 'react'
import { createContext } from 'react'

const authContext = createContext();
AuthProvider= authContext.Provider;
function AuthContext() {
    const [success, setSuccess] = useState("false");
    const [error, setError] = useState("null");
    const [loading, setLoading  ] = useState("false");
    const [user, setUser  ] = useState("null");
    // signup funcyion
    const authRegister=async(username,email,password) =>{
      setLoading(true)
await fetch("/api/users/register",{
  method:"POST",
  headers: {
"content-Type": "application/json"

  },
  body: JSON.stringify({
username,
email,
password,
  }),
})
.then((res) => res.json())
.then((data) =>{
  console.log(data);
  setSuccess(true);
  setUser(data);
})
.catch((err) =>{
  console.log(err);
  setError(err);
});
setLoading(false);
};  





  

}

    
  

  return (
    <div>
    
    </div>
  )


export default AuthContext