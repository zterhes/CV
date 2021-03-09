import React from 'react'
import styled from 'styled-components'
import ShadowText from '../components/styleComponents/shadowText'


const TitleDiv = styled.div`
display:flex;
background-color:transparent;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;
`


const Title = ({children}) => {
    return (
        <TitleDiv>
            <ShadowText textSize="10rem">{children}</ShadowText>
        </TitleDiv>
    );
}

export default Title;