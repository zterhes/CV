import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import backgroundPic from "../img/chip.jpg"
import { useTranslation } from "react-i18next";
import PageStyle from "../components/styleComponents/Page";
import { ContentDiv } from '../components/styleComponents/styleHolder'
import diplom from '../img/oklevel.jpg'
import Title from '../components/Titel';




const Img = styled.img`
height:50vh;
`

const SmallTitle = styled.p`
text-align:center;
font-size:30px;
font-weight:bold;
`

const Wrapper = styled.div`
display:flex;
justify-content:space-evenly;
width:100%;
margin-left:30px;
`

const ListContentDiv = styled.div`
margin-bottom:30px ;
margin-right:80px;
`

const ListContentHeader = styled.h4`
text-decoration:underline;
`

const ListContentText = styled.h6`
padding-left:1rem;
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
            <Title height="100vh">{t("profile")}</Title>
            <div>
                <ContentDiv>
                    <div className="my-4">
                        <h1>{t("terheszoran")}</h1>
                    </div>
                    <div className="text-center my-4">
                        <h3>{t("age")}</h3>
                        <h3>{age}</h3>
                    </div>
                    <div className="text-center my-4">
                        <h3>{t("location")}</h3>
                        <h3>{t("locationData")}</h3>
                    </div>
                    <div className="text-center my-4">
                        <h3>{t("text")}</h3>
                    </div>
                </ContentDiv>
            </div>
            <Title height="100vh">{t("educations")}</Title>
            <div>
                <ContentDiv>
                    <div className="text-center">
                        <h1>{t("juniorfrontenddeveloper")}</h1>
                        <h2>Flow Academy Szeged</h2>
                        <h2>2020-2021</h2>
                    </div>
                    <Wrapper>
                        <div>
                            <SmallTitle>5 hónapos 800 órás Full Stack Webfejlesztő képzés</SmallTitle>
                            <h3 className="text-center mb-5">Elsajátított készségek: </h3>
                            <Wrapper>
                                <div>
                                    <ListContentDiv>
                                        <ListContentHeader>Programnyelvek</ListContentHeader>
                                        <ListContentText>- JavaScript</ListContentText>
                                        <ListContentText>- Java</ListContentText>
                                    </ListContentDiv>
                                    <ListContentDiv>
                                        <ListContentHeader>Fejlesztési módszertanok</ListContentHeader>
                                        <ListContentText>- Verziókezelés - GIT</ListContentText>
                                        <ListContentText>- Kódszerkesztők (Microsoft VS Code, Intellij IDEA</ListContentText>
                                        <ListContentText>- Parancssori ismeretek (alapvető Linox/POSIX parancsok)</ListContentText>
                                        <ListContentText>- Hálózati ismeretek(OSI modell, HTTP, SSH)</ListContentText>
                                        <ListContentText>- Tesztelés(manuális/automata tesztelés)</ListContentText>
                                    </ListContentDiv>
                                    <ListContentDiv>
                                        <ListContentHeader>Frontend fejlesztés</ListContentHeader>
                                        <ListContentText>- Sitebuilding (HTML, CSS)</ListContentText>
                                        <ListContentText>- React frontend keretrendszer</ListContentText>
                                    </ListContentDiv>
                                    <ListContentDiv>
                                        <ListContentHeader>Backend fejlesztés</ListContentHeader>
                                        <ListContentText>- Spring framework és Spring Boot</ListContentText>
                                    </ListContentDiv>
                                </div>
                                <div>
                                    <ListContentDiv>
                                        <ListContentHeader>Adminisztratív eszközök használata</ListContentHeader>
                                        <ListContentText>- Dokumentáció és projekt-kezelő eszközök - GitHub</ListContentText>
                                        <ListContentText>- Swagger API dokumentáció</ListContentText>
                                        <ListContentText>- Projekt menedzsment módszerek (Agile)</ListContentText>
                                        <ListContentText>- Kommunikációs eszközök(Slack, Skype, Teams)</ListContentText>
                                    </ListContentDiv>
                                    <ListContentDiv>
                                        <ListContentHeader>Soft Skills és Karriermenedzsment</ListContentHeader>
                                        <ListContentText>- A kommunikáció alapjai</ListContentText>
                                        <ListContentText>- Vállalati kultúra</ListContentText>
                                        <ListContentText>- Céges kommunikáció</ListContentText>
                                        <ListContentText>- Flow</ListContentText>
                                        <ListContentText>- Konfliktuskezelés</ListContentText>
                                        <ListContentText>- Asszertív kommunikáció</ListContentText>
                                        <ListContentText>- FeedBack</ListContentText>
                                        <ListContentText>- Prezentációs technikák</ListContentText>
                                        <ListContentText>- DISC</ListContentText>
                                        <ListContentText>- Brainstorming</ListContentText>
                                        <ListContentText>- CV készítés és állásinterjú</ListContentText>
                                    </ListContentDiv>
                                </div>
                            </Wrapper>
                        </div>
                        <Img src={diplom} />
                    </Wrapper>
                </ContentDiv>
            </div>
            <Title height="100vh">{t("workExperience")}</Title>
            <div>
                <ContentDiv>
                    <div className="text-center">
                        <ListContentDiv>
                            <ListContentHeader>{t("Executive Director")}</ListContentHeader>
                            <ListContentText>RT Immobilien GmbH.| {t("Germany")} |2017 - 2021 </ListContentText>
                            <ListContentText>- {t("workers' hostel operation at several sites")}</ListContentText>
                            <ListContentText>- {t("full range of executive responsibilities, customer communication")}</ListContentText>
                        </ListContentDiv>
                        <ListContentDiv>
                            <ListContentHeader>{t("Executive Director")}</ListContentHeader>
                            <ListContentText>Maros Sped Trans Kft.| {t("Hungary")} | 2012 - 2018</ListContentText>
                            <ListContentText>- {t("motor vehicle repair and trade, clinical secunder transport")}</ListContentText>
                            <ListContentText>- {t("vehicle maintenance, HR coordination, transport logistics")}</ListContentText>
                        </ListContentDiv>
                        <ListContentDiv>
                            <ListContentHeader>{t("Site manager")}</ListContentHeader>
                            <ListContentText>Maros Sped Kft. | {t("Hungary")} | 2010 - 2012</ListContentText>
                            <ListContentText>- {t("clinical secunder transport")}</ListContentText>
                            <ListContentText>- {t("vehicle maintenance, HR coordination, transport logistics")}</ListContentText>
                        </ListContentDiv>
                        <ListContentDiv>
                            <ListContentHeader>{t("Authenticity Assistant and Service Coordinator")}</ListContentHeader>
                            <ListContentText>Bavaria-Szeged Bt.| {t("Hungary")} | 2009 - 2010</ListContentText>
                            <ListContentText>- {t("clinical secunder transport")}</ListContentText>
                            <ListContentText>- {t("coordination of the work of a car repair shop, procurement of materials, recruitment, performance of origin verification assistant tasks")}</ListContentText>
                        </ListContentDiv>
                    </div>
                </ContentDiv>
            </div>
        </PageStyle>

    );
}

export default Resume;