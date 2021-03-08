import React from 'react'
import styled from "styled-components";
import backgroundPic from "../img/chip.jpg"
import { useTranslation } from "react-i18next";
import Page from "../components/styleComponents/Page";
import ShadowText from '../components/styleComponents/shadowText'
import { ContentDiv } from '../components/styleComponents/styleHolder'


const TitleDiv = styled.div`
display:flex;
background-color:transparent;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;
`

const Title = styled.h1`
font-size:10rem;
`


const Resume = () => {
    const { t } = useTranslation();
    return (
        <Page url={backgroundPic}>
            <TitleDiv>
                <ShadowText textSize="10rem">{t("resume.profile")}</ShadowText>
            </TitleDiv>
            <div>
                <ContentDiv>
                    <h1>test</h1>
                </ContentDiv>
            </div>
            <TitleDiv>
                <ShadowText textSize="10rem">{t("resume.educations")}</ShadowText>
            </TitleDiv>
        </Page>

    );
}

export default Resume;