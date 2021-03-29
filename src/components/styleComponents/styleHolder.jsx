import styled from "styled-components";
import backgroundPic from '../../img/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall.jpg'
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
text-align:center;
text-decoration:none;
color:white;
width:100%;
`

export const ContentDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
background:url(${backgroundPic});
width:100vw;
padding-top:50px;
padding-bottom:50px;
color:white;
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