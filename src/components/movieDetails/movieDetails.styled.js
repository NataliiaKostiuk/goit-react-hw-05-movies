import styled from "styled-components";
import { NavLink } from "react-router-dom";
 
export const Container = styled.div`
margin-top: 50px;
display: flex;
gap: 20px;
`;
 
export const WrapLink = styled.div`
width:100%;
background-color:rgba(204, 200, 200, 0.8);
border-radius: 5px;
`;

export const BtnLink = styled(NavLink)`
display: inline-block;
padding: 20px;
margin-left:30px;
text-decoration: none;
font-size: large;
color:rgb(2, 35, 72);
  &.active {
    color: rgba(80, 155, 10, 0.789);
  }
`