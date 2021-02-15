import React from 'react';
import styled from "styled-components";
import MenuComponents from "./menuComponents";
import profile from "../img/profile.jpg"
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";



const Page = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
background-color:grey;
height:100%;
font-size:1vw;
`

const ProfilePic = styled.img`
width:70%;
border-radius:50%;
border:1px solid white;

`



export default () => {
    const { t } = useTranslation();
    return (
        <Page>
            <LanguageSwitcher></LanguageSwitcher>
            <ProfilePic src={profile}></ProfilePic>
            <MenuComponents link="/">{t("mainpage")}</MenuComponents>
            <MenuComponents link="/educations">{t("educations")}</MenuComponents>
            <MenuComponents link="/experience">{t("experiencies")}</MenuComponents>
            <MenuComponents link="/work">{t("work.history")}</MenuComponents>
            <MenuComponents link="/skills">{t("skills")}</MenuComponents>
            <MenuComponents link="/contacts">{t("contacts")}</MenuComponents>
        </Page>
    );
}