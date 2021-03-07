import React from 'react';
import styled from "styled-components";
import backgroundPic from "../img/laptop.jpg"
import Typed from 'react-typed';
import { useTranslation } from "react-i18next";

const Page = styled.div`
display:flex;
width: 100%;
height: 100%;
background: url(${backgroundPic});
background-size:100vw;
background-repeat:no-repeat;
background-position:center;
`

const Name = styled.p`
color: white;
font-size:6vw;
text-shadow:6px 6px 3px rgba(0,0,0,0.71);
`

const NameDiv = styled.div`
border: 15px solid white;
text-align:center;
width:70vw;
margin:auto;
`

export default () => {
    const { t } = useTranslation();
    return (
        <Page>
            <NameDiv>
                <Name>{t("terheszoran")}</Name>
                <Typed className="typed-design"
                    strings={[t("juniorfrontenddeveloper"),
                        'ReactJS',
                        'Spring Boot',
                        'JAVA',
                        'JavaScript',
                        'MySQL',
                        'MongoDB']}
                    typeSpeed={30}
                    backSpeed={30}
                    loop
                />
            </NameDiv>
        </Page>

    );
}