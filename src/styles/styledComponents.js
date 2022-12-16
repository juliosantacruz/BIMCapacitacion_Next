import styled from "styled-components";

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;
`;
export const TitleMain = styled.h1`
  width: 100%;
  margin: 30px 0;
  /* padding-bottom: 30px; */
  text-align: center;
  font-size: 26px;
  @media screen and (min-width: 600px) {
    font-size: 28px;
  }
  @media screen and (min-width: 800px) {
    margin: 20px 0;
    font-size: 32px;
  }
`;

export const TitleSection = styled.h2`
  width: 100%;
  margin: 30px 0;
  /* padding-bottom: 30px; */
  text-align: center;
  font-size: 26px;
  @media screen and (min-width: 600px) {
    font-size: 28px;
  }
  @media screen and (min-width: 800px) {
    margin: 20px 0;
    font-size: 32px;
  }
`;

export const MainButton = styled.button`
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
   margin:20px 0 0 0 ;
  background: none;
  border: solid 1px black;
  border-radius: 15px;
  padding: 15px 30px;
  font-size:18px;
   
  :hover {
    background: #0074bd;
    color: white;
    font-weight:700;
  }
  :focus {
    background: #0074bd;
    color: white;
    font-weight:700;
  }
`;
