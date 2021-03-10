import React from 'react';
import Page from '../components/styleComponents/Page'
import backGroundPic from '../img/tech.jpg'
import Title from '../components/Titel';
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {ReactComponent as ReactIcon} from '../img/icons/React-icon.svg';
import {ReactComponent as SpringIcon} from '../img/icons/spring-3.svg';
import {ReactComponent as JSIcon} from '../img/icons/logo-javascript.svg';



const ToolsDiv = styled.div`
display:flex;
justify-content:center;
height: 100px;
`

const Paged=styled(Page)`
height:100vh;
`

const Technologies = () => {
    const { t } = useTranslation()
    return (
        <Paged url={backGroundPic}>
            <Title>{t("technologies")}</Title>
            <ToolsDiv>
                <ReactIcon fill="white"/>
                <SpringIcon fill="green"/>
                <JSIcon/>
            </ToolsDiv>
        </Paged>
    );
}

export default Technologies;