import React from 'react';
import styled from "styled-components";
import backgroundPic from "../img/laptop.jpg"
import Typed from 'react-typed';
import { useTranslation } from "react-i18next";
import Page from '../components/styleComponents/Page'
import ShadowText from '../components/styleComponents/shadowText'
import { TitleDiv } from '../components/styleComponents/styleHolder'


const NameDiv = styled.div`
border: 15px solid white;
text-align:center;
width:70vw;
margin:auto;
`

export default () => {
    const { t } = useTranslation();
    return (
        <Page url={backgroundPic}>
            <TitleDiv>
                <NameDiv>
                    <ShadowText textSize="6rem">{t("terheszoran")}</ShadowText>
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
            </TitleDiv>
        </Page>

    );
}