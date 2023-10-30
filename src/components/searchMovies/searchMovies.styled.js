import styled from "styled-components";
import { Field } from "formik";

export const StyledField = styled(Field)`
margin-top: 10px;
width: 600px;
height: 50px;
border-radius: 10px;
 &.active {
    color: rgba(80, 155, 10, 0.789);
  }
`;

export const Btn = styled.button`
border: none;
background-color: rgba(31, 124, 245, 0.959);
color: rgb(2, 35, 72);
display: inline-block;
padding: 17px;
border-radius: 15px;
`;


