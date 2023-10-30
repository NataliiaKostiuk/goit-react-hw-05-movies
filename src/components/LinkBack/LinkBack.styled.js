import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkGoBack = styled(NavLink)`
font-weight: 500;
text-decoration: none;
color:rgb(2, 35, 72);
display: inline-block;
padding: 7px;
border-radius: 10px;
background-color:lightgrey ;
margin: 10px;
  & :hover {
    color: rgba(80, 155, 10, 0.789);
  }
`