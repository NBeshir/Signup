import React,{Component} from 'react';

import './App.css';
import Signup from './Signup';




class App extends Component {
  constructor(props){
    super(props)

    this.state={
      username:"",
      userError:"",
      email:"",
      password:"",
      confirmPassword:"",
      route:"",
      
      data:[]
    }
  }
  onChange = (e)=>{
this.setState({ ...this.state, [e.target.name]:e.target.value})
  }
  
  

  registerUser = (e)=>{
      e.preventDefault();
      const username = this.state.username;
      const email = this.state.email;
      const password = this.state.password
      const confirmPassword= this.state.confirmPassword;

      const obj=[{
      username: username,
      email:email,
      password:password,
      confirmPassword:confirmPassword

      }]
     const newData = this.state.data.push([obj])
     if(password === confirmPassword){
 this.setState({data:[...this.state.data, newData],
  username:"",
  email:"",
  password:"",
  confirmPassword:""
 });
 console.log(this.state.data)
     }else{
       console.log("passwords don't match")
     }

 }
   render(){
   return (
    <div className="App">
        
        <Signup 
 
              onChange={this.onChange}
              onSubmit={this.registerUser}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
        />   

    </div>
  );
}
}

export default App;
