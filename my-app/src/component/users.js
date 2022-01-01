import React,{Component} from "react";
import User from "./user.js";



class Users extends Component{
    render(){
        const {users, deleteUser}=this.props;


        return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>{
                        const {id,name,email} =user;
                        return <User 
                        key={id} 
                        id={id} 
                        name={name} 
                        email={email} 
                        deleteUser={deleteUser} />
                    })
                }
                
            </tbody>
        </table>
        )
    }
}
export default Users;