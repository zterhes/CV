import React from 'react'
import styled from 'styled-components'
import ShadowText from '../components/styleComponents/shadowText'
import HireButton from './HireButton'


const TitleDiv = styled.div`
display:flex;
flex-direction:column;
background-color:transparent;
width:100vw;
height:${props=>props.height};
justify-content:center;
align-items:center;
`


const Title = ({height ,children}) => {
    return (
        <TitleDiv height={height}>
            <ShadowText textSize="10rem">{children}</ShadowText>
            <HireButton/>
        </TitleDiv>
    );
}

export default Title;