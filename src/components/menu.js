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
background-color:rgba(0, 0,0, 0.6);
height:100%;
border-radius:30px;
font-size:1vw;
box-shadow:6px 6px 3px rgba(0,0,0,0.71);
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
            <MenuComponents link="/resume">{t("resume")}</MenuComponents>
            <MenuComponents link="/technologies">{t("technologies")}</MenuComponents>
            <MenuComponents link="/referencies">{t("referencies")}</MenuComponents>
            <MenuComponents link="/contacts">{t("contacts")}</MenuComponents>
        </Page>
    );
}