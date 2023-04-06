import { useContext } from "react";
import { OuthContext } from "../../contexts/OuthContext";

import { register } from "../../services/user-service";

import { StyledDiv,StyledSmallHeading,StyledForm,StyledLabel,StyledInput,StyledSubmitInput } from "./elements";

const Register=()=>{

    let [user,changeUserState,navigate]=useContext(OuthContext);

    function RegisterUser(e){  
        try {
         register(e)
            .then(user => {
               changeUserState(user)
                navigate("/home")
            })
           .catch(err=>console.log(err))
        }
       catch(err){console.log(err)}        
    }

    return (
        <StyledDiv>
            <StyledSmallHeading>Register</StyledSmallHeading>
            <StyledForm onSubmit={RegisterUser}>
               <StyledLabel htmlFor="username">Username</StyledLabel>
               <StyledInput type='text' name="username" required minLength={5}/>
               <StyledLabel htmlFor="password">Password</StyledLabel>
               <StyledInput type='password' name="password" required minLength={8}/>
               <StyledLabel htmlFor="re-pass">Repeat Password</StyledLabel>
               <StyledInput type='password' name="re-pass" required minLength={8}/>
               <StyledSubmitInput type='submit' value="Register"/>
            </StyledForm>
        </StyledDiv>
    )
};

export default Register