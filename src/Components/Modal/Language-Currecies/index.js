
import React from 'react';
import i18next from 'i18next';
import {
    Backdrop,
    Modal,
    ModalSection,
    ModalUl,
    ModalLi,
    ModalTitle,
    ButtonContainer


} from './style';


function İndex(props) {

    const Language = ["English", "Turkce", "Italiano", "Espanol"]

    const handleLanguageChange = (lang) => {
        i18next.changeLanguage(lang)
    }

    return (
        <>
            <Backdrop onClick={() => props.handleClose()}></Backdrop>
            <Modal >
                <ModalSection>
                    <ModalTitle>language</ModalTitle>
                    <ModalUl>
                        {Language.map(lang => (
                            lang === localStorage.getItem('i18nextLng') ?
                                <ModalLi className='Active' onClick={(e) => handleLanguageChange(lang)}>{lang}</ModalLi>
                                : <ModalLi onClick={(e) => handleLanguageChange(lang)}>{lang}</ModalLi>
                        ))}
                        <select >
                            <option hidden>All Languages</option>
                            <option>Japon</option>
                            <option>Chine</option>
                        </select>
                    </ModalUl>
                </ModalSection>

                <ModalSection>
                    <ModalTitle>Currencies</ModalTitle>
                    <ModalUl>
                        <ModalLi>$ United States Dollar"</ModalLi>
                        <ModalLi>€ Euro</ModalLi>
                        <ModalLi>₺ Turkish Lira</ModalLi>
                        <select >
                            <option hidden>All Currencies</option>
                            <option>Ruble</option>
                            <option>Yuan</option>
                        </select>
                    </ModalUl>
                </ModalSection>

                <ModalSection>
                    <ButtonContainer>
                        <button onClick={() => props.handleClose()}  >Cancel</button>
                        <button >Save</button>
                    </ButtonContainer>

                </ModalSection>
            </Modal>
        </>
    )
}

export default İndex;















