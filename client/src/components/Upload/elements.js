import styled from 'styled-components';

export const StyledDiv=styled.div`
width: 100%;
max-width: 1000px;
margin: 0 auto;
`
export const StyledForm=styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
`
export const StyledInput=styled.input`
display: none;
`
export const StyledSubmitInput=styled.input`
 display: ${({show})=>show ? "block" : "none"};
 padding: 8px 15px;
 font-size: 16px;
 font-weight: 600;
 border: none;
 border-radius: 10px;
 cursor: pointer;
`
export const StyledButton=styled.button`
 padding: 8px;
 font-size: 16px;
 font-weight: 600;
 border: none;
 border-radius: 10px;
 cursor: pointer;
`
export const StyledParagraph=styled.p`

`
