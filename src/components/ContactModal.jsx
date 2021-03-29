import React, { useState } from 'react'
import Modal from 'react-modal';
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import Shadowtext from '../components/styleComponents/shadowText'
import mobileBig from '../img/mobileBig.png'
import mobileSmall from '../img/mobileSmall.png'
import telephone from '../img/telephone.png';
import email from '../img/email.png';
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import { StyledLink } from '../components/styleComponents/styleHolder'
import ContactModalDataDiv from '../components/ContactModalDataDiv'




const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        WebkitOverflowScrolling: 'touch',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

const ModalPage = styled.div`
display:flex;
width:80vw;
height: 80vh;
`

const PictureDiv = styled.div`
background: no-repeat url(${mobileSmall});
height:100%;
width:50%;
`
const CloseButton = styled.button`
align-self:flex-end;
background-color:black;
color:white;
`

const ContentDiv = styled.div`
display:flex;
flex-direction:column;
width:50%;
`

const DataDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
flex-wrap:wrap;
`

const ReStyledLink = styled(StyledLink)`
width:auto;
`
const ContactModal = ({ isOpen, closeModal }) => {
    const { t } = useTranslation()
    function afterOpenModal() {
    }
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Contact Modal"
            >
                <ModalPage>
                    <PictureDiv>
                        <Shadowtext textSize="5rem" className="text-center">{t("contactMe")}</Shadowtext>
                    </PictureDiv>
                    <ContentDiv>
                        <CloseButton className="float-right" onClick={closeModal}>X</CloseButton>
                        <Shadowtext textSize="3rem" className="text-center">{t("terheszoran")}</Shadowtext>
                        <DataDiv>
                            <ContactModalDataDiv iconsrc={telephone}>+36 70 205 5479</ContactModalDataDiv>
                            <ContactModalDataDiv iconsrc={email}>zoran.terhes@gmail.com</ContactModalDataDiv>
                            <ReStyledLink to={{ pathname: 'https://www.linkedin.com/in/zoranterhes/' }} target="_blank">
                                <ContactModalDataDiv iconsrc={linkedin}>{t('clickme')}</ContactModalDataDiv>
                            </ReStyledLink>
                            <ReStyledLink to={{ pathname: 'https://github.com/zterhes' }} target="_blank">
                                <ContactModalDataDiv iconsrc={github}>{t('clickme')}</ContactModalDataDiv>
                            </ReStyledLink>

                        </DataDiv>
                    </ContentDiv>
                </ModalPage>
            </Modal>
        </div>
    );
}

export default ContactModal;