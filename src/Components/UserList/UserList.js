import React, {useState, useEffect} from 'react'
import axios from "axios";
import UserCard from '../UserCard/UserCard'


const UserList = () => {
    const [listUser, setListUser] = useState([]);

        const getUsers=()=>{
            axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setListUser(res.data))
            .catch((err) => console.log(err))
        }

console.log("listUUserrrrr",listUser)
useEffect(() => {
    getUsers();
  }, []);


    return (
       <div className="container d-flex flex-wrap">
      {listUser.map((el, i) => (
        
        <UserCard user={el} key={i} />
      ))}
    </div>
    )
}

export default UserList