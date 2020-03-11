import React from 'react';
import './App.css';

const Signup = ({onChange,onSubmit, username,email, password, confirmPassword})=>{

    
return (
    <div style={{border:"1px solid gray", width:"300px", height:"400px", margin:"20px auto", borderRadius:"5px", padding:"10px", backgroundColor:"skyBlue"}}>
        <h1>Sign up</h1>
        <form onSubmit={onSubmit} >
            <input type="text" name="username" placeholder="please enter your user name" 
             onChange={onChange} value={username} required/>
            <input type="email" name="email" placeholder="please enter your user email" value={email} onChange={onChange} required/>
            <input type="password" name="password" placeholder="please enter your password"  value={password} onChange={onChange} required/>
            <input type="password" name="confirmPassword" placeholder="please confirm your password"  value={confirmPassword} onChange={onChange} required/>
            <input type="submit" value="Sign up"/>
        </form>

    </div>
)
}
export default Signup;