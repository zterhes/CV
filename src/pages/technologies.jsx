import React from 'react';
import Page from '../components/styleComponents/Page'
import backGroundPic from '../img/tech.jpg'
import Title from '../components/Titel';
import { useTranslation } from "react-i18next";


const Technologies = () => {
    const { t } = useTranslation()
    return (
        <Page url={backGroundPic}>
            <Title>{t("technologies")}</Title>
        </Page>
    );
}

export default Technologies;