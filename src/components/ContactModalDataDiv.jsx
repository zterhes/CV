import React,{useState} from 'react'
import Typed from 'react-typed';
import styled from "styled-components";



const TextTyper = ({ children }) => {
    return (
        <Typed className="typed-design"
            strings={[children]}
            typeSpeed={30}
            showCursor={false}
        />
    );
}

const Icon = styled.img`
width:15vh;
background-color:rgba(255,255,255,0.7);
border-radius:50%;
`

const TextDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const ContactModalDataDiv = ({children,iconsrc}) => {
    const [active,setActive]=useState(false)

    return (
        <TextDiv onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {active && <TextTyper>{children}</TextTyper>}
            <Icon src={iconsrc}></Icon>
        </TextDiv>
    );
}

export default ContactModalDataDiv;