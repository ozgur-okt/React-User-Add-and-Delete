import React, { Component } from 'react'
import AddUser from "./component/adduser.js"
import Users from "./component/users.js"

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      users:[
        {
          id:1,
          name:"Ozan Aydın",
          email:"ozan@gmail.com"
        },
        {
          id:2,
          name:"Ayşe Çelik",
          email:"ayse@gmail.com"
        },
        {
          id:3,
          name:"Ahmer Demir", 
          email:"ahmet@gmail.com"
        }
      ]
    };
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this)
  }
 
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    })
  }
  
 deleteUser(id){
     let updatedUsers=this.state.users;
     
     updatedUsers = updatedUsers.filter(user => user.id!==id);
     this.setState({
         users:updatedUsers
        });
  } 
  render() {
    return (
      <div className='container'>
        <h4>User App</h4>
        <hr/>
        <AddUser addUser={this.addUser} />
        <hr/>
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    )
  }
}


export default App;