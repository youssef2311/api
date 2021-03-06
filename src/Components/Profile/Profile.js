import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({match}) => {

const [user, setUser] = useState({})



console.log("match.params.id",match.params.id)

 const getUserById = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  };

console.log("user",user)
useEffect(() => {
    getUserById();
  }, [match]);

    return (
        <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center" style={{"marginRight":"30%","marginLeft":"15%","marginTop":"10%"}}>
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                             
                                <h6 className="f-w-600">  </h6>
                               
                                <p style={{color:"black"}}>{user.name} </p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"> </i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600" style={{textAlign:"center"}}>Information</h6>
                                <div className="row">
                                    <div className="col-sm-6" style={{marginTop:"6%"}}>
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user.email}</h6>
                                    </div>
                                    <div className="col-sm-6" >
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">{user.phone}</h6>
                                    </div>
                                </div>
                                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Profile