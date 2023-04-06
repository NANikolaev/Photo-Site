import { useContext,useState,useRef } from "react";
import { OuthContext } from "../../contexts/OuthContext";
import { onChange,onClick } from "./utils";
import { create } from "../../services/image-service";
import { StyledDiv,StyledForm,StyledInput,StyledSubmitInput,StyledButton,StyledParagraph } from "./elements"

const Upload=()=>{

 let [user,changeUserState,navigate]=useContext(OuthContext);
 let inputFile = useRef(null);
 let [fileName, setFileName] = useState('');
 
 function uploadImage(e){
     create(e,user.accessToken)
     .then(image=>{  
        navigate(`/image/${image._id}`);
     })
     .catch(err=>console.log(err))
    
 }

return (
    <StyledDiv>
     <StyledForm onSubmit={uploadImage}>
         <StyledButton onClick={(e)=>onClick(inputFile,e)}>Upload Picture</StyledButton>
         <StyledInput type='file' name="image" onChange={(e) => onChange(setFileName, e)} ref={inputFile} required/>
         <StyledParagraph>{fileName}</StyledParagraph>
         <StyledSubmitInput show={fileName} type='submit' value="ADD"/>
     </StyledForm>
    </StyledDiv>
)

}

export default Upload