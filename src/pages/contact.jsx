import React from 'react'
import handshake from '../img/handshake.jpg';
import styled from "styled-components";
import Page from '../components/styleComponents/Page'


const PicDiv = styled.div`
background:center url(${handshake});
height: 50vh;
width:51vw;
`

const Paged= styled(Page)`
background-color:black;
height:100vh;
`

const Card = styled.div`
height:50vh;
width:50vw;
background-color:white;

`

const Contact = () => {
    return ( 
        <Paged>
<Card></Card>
        </Paged>
        
     );
}
 
export default Contact;