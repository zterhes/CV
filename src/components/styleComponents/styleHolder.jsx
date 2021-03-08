import styled from "styled-components";
import backgroundPic from '../../img/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall.jpg'

export const ContentDiv = styled.div`
display:flex;
background:url(${backgroundPic});
height: 100vh;
width:100vw;
clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 94%);
`

export const TitleDiv = styled.div`
display:flex;
background-color:transparent;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;
`