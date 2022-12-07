import styled from "styled-components";


export const ContainerColumn = styled.div`
display:flex;
flex-direction:column;


width:100vw;
height:100%;
`


export const TitleSection = styled.h2`
 width:100%;
 margin: 30px 0;
 /* padding-bottom: 30px; */
 text-align: center;
 font-size:26px;
 @media screen and (min-width: 600px) {
 font-size:28px
  }
 @media screen and (min-width: 800px) {
    margin: 20px 0;
 font-size:32px
  }
`