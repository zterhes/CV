import React from 'react';
import Page from '../components/styleComponents/Page'
import backGroundPic from '../img/tech.jpg'
import Title from '../components/Titel';
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ReactComponent as ReactIcon } from '../img/icons/React-icon.svg';
import { ReactComponent as SpringIcon } from '../img/icons/spring-3.svg';
import { ReactComponent as JSIcon } from '../img/icons/logo-javascript.svg';
import { ReactComponent as JavaIcon } from '../img/icons/java-4.svg';
import { ReactComponent as HtmlIcon } from '../img/icons/html5.svg';
import { ReactComponent as CssIcon } from '../img/icons/css-5.svg';
import { ReactComponent as MySqlIcon } from '../img/icons/mysql-5.svg';
import { ReactComponent as MongoIcon } from '../img/icons/mongodb-icon-1.svg';
import { ReactComponent as BootstrapIcon } from '../img/icons/bootstrap-4.svg';
import { ReactComponent as VSCIcon } from '../img/icons/vscode.svg';
import { ReactComponent as IntellijIcon } from '../img/icons/intellij-idea-1.svg';
import { ReactComponent as GitIcon } from '../img/icons/git-icon.svg';
import { ReactComponent as GitHubIcon } from '../img/icons/github-icon-1.svg';
import { ReactComponent as UbuntuIcon } from '../img/icons/ubuntu-4.svg';
import { ReactComponent as DockerIcon } from '../img/icons/docker.svg';

const ToolsDiv = styled.div`
display:flex;
justify-content:space-between;
height: 180px;
padding-left:300px;
padding-top:40px;
`

const Paged = styled(Page)`
height:100vh;
align-items:center;
justify-content:center;
`


const Technologies = () => {
    const { t } = useTranslation()
    return (
        <Paged url={backGroundPic}>
            <Title>{t("technologies")}</Title>
            <ToolsDiv>
                <ReactIcon fill="white" />
                <SpringIcon fill="green" />
                <JSIcon />
                <JavaIcon />
                <HtmlIcon />
                <CssIcon />
                <MySqlIcon />
                <MongoIcon />
            </ToolsDiv>
            <ToolsDiv>
                <BootstrapIcon />
                <VSCIcon />
                <IntellijIcon />
                <GitIcon />
                <GitHubIcon />
                <UbuntuIcon />
                <DockerIcon />
            </ToolsDiv>
        </Paged>
    );
}

export default Technologies;