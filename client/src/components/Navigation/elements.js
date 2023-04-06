import styled from "styled-components";

export const StyledHeader=styled.header`
position: relative;
width: fit-content;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 40px;
div ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li{
        font-size: 18px;
        line-height: 2;
        border-bottom: 1px solid white;
        padding: 5px;
    }
}
`
export const StyledList=styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`
export const StyledItem=styled.li`
font-size: 24px;
font-weight: 600;
cursor: pointer;
`
export const StyledDiv=styled.div`
 display: ${({show})=>show ? "block" :'none'};
 background-color: #bcbfbffc;
 position: absolute;
 top: 30px;
 right: 0;
`