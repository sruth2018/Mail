import React from "react";
import avatar from "../images/avatar.png";
const WelcomePage = (props) =>
{
    const{name ,email} = props.profile;
    console.log(props);
  
    return(
        <div className ="item">
            <img className ="ui avatar image" src={avatar} alt="avatar"/>
        <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
    </div>
    <i className="bell icon" style={{color: "blue", marginRight:"7px"}}></i>
  </div>
  
       );
         
 
}
export default WelcomePage;