import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import { getSpecificImage } from "../../services/image-service";

import { StyledDiv,StyledSmallHeading,StyledImage } from "./elements";

const ImageOverview=()=>{

    let imageId=useParams().id;
    let [image,setImage]=useState({});

    useEffect(()=>{
        getSpecificImage(imageId)
        .then(image=>setImage(image))
    },[])


return (
    <StyledDiv>
       <StyledSmallHeading>{image.title}</StyledSmallHeading>
       <StyledImage src={image.url}/>
    </StyledDiv>
)

}

export default ImageOverview