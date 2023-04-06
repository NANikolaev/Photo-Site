import { useContext } from "react";
import { OuthContext } from "../../contexts/OuthContext";

import { login } from "../../services/user-service";

import { StyledDiv,StyledSmallHeading,StyledForm,StyledLabel,StyledInput,StyledSubmitInput } from "./elements";

const Login=()=>{
 
    let [user,changeUserState,navigate]=useContext(OuthContext);

    function loginUser(e){
         login(e)
            .then(user => {
                changeUserState(user);
                navigate('/home');
             })
             .catch(err=>console.log(err))
     }
    

    return (
        <StyledDiv>
            <StyledSmallHeading>Login</StyledSmallHeading>
            <StyledForm onSubmit={loginUser}>
               <StyledLabel htmlFor="username">Username</StyledLabel>
               <StyledInput type='text' name="username" required minLength={5}/>
               <StyledLabel htmlFor="password">Password</StyledLabel>
               <StyledInput type='password' name="password" required minLength={8}/>
               <StyledSubmitInput type='submit' value="Login"/>
            </StyledForm>
        </StyledDiv>
    )

};

export default Login