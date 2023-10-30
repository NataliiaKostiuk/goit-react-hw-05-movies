import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
width: 100%;
height: 60px;
background-color:whitesmoke;
box-shadow: 3px 3px 3px 3px rgba(41, 42, 42, 0.47)
`;

export const StyledNavLink = styled(NavLink)`
text-decoration:none;
display: inline-block;
padding: 20px;
margin-left: 20px;
font-size: x-large;
color:rgb(2, 35, 72);
  &.active {
    color: rgba(80, 155, 10, 0.789);
  }
`
