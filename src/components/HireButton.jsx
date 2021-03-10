import React from 'react'
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ShadowText from './styleComponents/shadowText'


const MyButton = styled.button`
background:transparent;
font-size:3rem;
color:white;
border: 5px solid white;
border-radius:10px;
box-shadow: 6px 6px 3px rgba(0,0,0,0.71);
&:hover{
    border: 5px solid transparent;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    background-color: #2EE59D;
    transform: translateY(-7px);
    }
`


const HireButton = () => {
    const { t } = useTranslation()
    return (

        <Link to="/contacts">
            <MyButton>
                <ShadowText>{t("hireButton")}</ShadowText>
            </MyButton>
        </Link>
    );
}

export default HireButton;