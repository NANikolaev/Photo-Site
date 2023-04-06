import { useState,useEffect } from "react";
import { Link,Routes, Route, } from "react-router-dom";

import { last10 } from "../../services/image-service";

import Login from "../Login/Login";
import Register from "../Register/Register";

import { StyledSection,StyledList,StyledItem,StyledHeading } from "./elements";

const Home=({user})=>{

  let [images,setImages]=useState([])
  useEffect(()=>{
     last10()
     .then(images=>setImages(images))
  },[])

return (
    <StyledSection>
      {!user
       ?<StyledList>
         <StyledItem><Link to='login'>Login</Link></StyledItem>
         <StyledItem><Link to='register'>Register</Link></StyledItem>
       </StyledList>
       :''
      }
      <StyledHeading>Last 10 Added</StyledHeading>
       <StyledList>
         {images.map((x,i)=><StyledItem key={i}><Link to={`/image/${x._id}`}>Image {i+1}</Link></StyledItem>)}        
      </StyledList>
        <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
        </Routes>
    </StyledSection>
)

};

export default Home