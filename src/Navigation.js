import React from 'react';

import { NavLink } from 'react-router-dom';
import Switch from "react-bootstrap/Switch";
import Employee from "./Employee/Employee";
import Jobs from "./Employee/Jobs";

const Navigation = () => {

    return (
       <div>
           <div style={{backgroundColor:"black", marginBottom:20, paddingBottom:10, position:"fixed"}}>
               <NavLink style={{color:"white", paddingRight:20, fontSize:20}} to="/profile">Profile</NavLink>
               <NavLink style={{color:"white", paddingRight:20, fontSize:20}} to="/jobs">Jobs</NavLink>
           </div>
       </div>
    );
};

export default Navigation;