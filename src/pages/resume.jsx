import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import backgroundPic from "../img/chip.jpg"
import { useTranslation } from "react-i18next";
import PageStyle from "../components/styleComponents/Page";
import ShadowText from '../components/styleComponents/shadowText'
import { ContentDiv } from '../components/styleComponents/styleHolder'
import diplom from '../img/oklevel.jpg'


const TitleDiv = styled.div`
display:flex;
background-color:transparent;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;
`

const Img = styled.img`
height:50vh;
`

const SmallTitle = styled.p`
font-size:30px;
font-weight:bold;
`

const ContentInlineDiv = styled.div`
display:flex;
justify-content:space-between;
`



const Resume = () => {
    const [age, setAge] = useState()
    const { t } = useTranslation();

    const calculateAge = () => {
        const bday = new Date("1990-01-17");
        const ageDif = new Date(Date.now() - bday)
        setAge(ageDif.getUTCFullYear() - 1970)
    }

    useEffect(() => {
        calculateAge()
    })


    return (
        <PageStyle url={backgroundPic}>
            <TitleDiv>
                <ShadowText textSize="10rem">{t("profile")}</ShadowText>
            </TitleDiv>
            <div>
                <ContentDiv>
                    <div>
                        <h1>{t("terheszoran")}</h1>
                    </div>
                    <div className="text-center">
                        <h3>{t("age")}</h3>
                        <h3>{age}</h3>
                    </div>
                    <div className="text-center">
                        <h3>{t("location")}</h3>
                        <h3>{t("locationData")}</h3>
                    </div>
                    <div className="text-center">
                        <h3>{t("text")}</h3>
                    </div>
                </ContentDiv>
            </div>
            <TitleDiv>
                <ShadowText textSize="10rem">{t("educations")}</ShadowText>
            </TitleDiv>
            <div>
                <ContentDiv>
                    <div className="text-center">
                        <h1>{t("juniorfrontenddeveloper")}</h1>
                        <h2>Flow Academy Szeged</h2>
                        <h2>2020-2021</h2>
                    </div>
                    <ContentInlineDiv>
                        <div>
                            <SmallTitle>5 hónapos 800 órás Full Stack Webfejlesztő képzés</SmallTitle>
                        </div>
                        <Img src={diplom} />
                    </ContentInlineDiv>
                </ContentDiv>
            </div>
        </PageStyle>

    );
}

export default Resume;