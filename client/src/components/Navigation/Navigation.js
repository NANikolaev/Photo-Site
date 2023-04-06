import { useState,useContext } from "react";
import { OuthContext } from "../../contexts/OuthContext";
import { Link } from "react-router-dom";
import { StyledHeader,StyledList,StyledItem,StyledDiv } from "./elements";

const Navigation=()=>{
  let [show,setShow]=useState(false);
  let [user,changeUserState,navigate]=useContext(OuthContext);

  function onClick(){
     setShow(!show)
  }

  function logOut(){
    changeUserState('');
    navigate('/home')
  }
  
  return (
   <StyledHeader>
     <StyledList>
        <StyledItem><Link to="/home">Home</Link></StyledItem>
        <StyledItem><Link to="/pictures">Pictures</Link></StyledItem>
        <StyledItem><Link to="/users">Users</Link></StyledItem>
        <StyledItem><Link to="/contacts">Contacts</Link></StyledItem>
        {user && <StyledItem onClick={()=>setShow(!show)}>Profile</StyledItem>}
     </StyledList>
     <StyledDiv show={show}>
        <StyledList onClick={onClick}>
          <StyledItem><Link to='/upload'>Upload</Link></StyledItem>
          <StyledItem><Link to={`user/profile`}>Change Profile</Link></StyledItem>
          <StyledItem onClick={logOut}>Logout</StyledItem>
        </StyledList>
     </StyledDiv>
   </StyledHeader>
  )

};

export default Navigation;