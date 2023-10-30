import styled from "styled-components";

export const List = styled.ul`
display: flex;
gap:10px;
flex-wrap:wrap;
justify-content: center;
list-style: none;
`;

export const Img = styled.img`
width: 200px;
height: 300px;`;

export const Item = styled.li`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  height: 450px;
`;

export const StyledText = styled.p`
  padding: 5px;
  text-align: center;
  font-weight: 500;
`;
export const NoResult = styled.div`
  width: 100%;
  background-color: lightgray;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 30px;
`;