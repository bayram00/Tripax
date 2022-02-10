import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import Modal from '../../Components/Modal/Language-Currecies'
import {
  Container,
  Logo,
  Menu,
  LangCurrencyWrapper,
  LangCurrency,
  SignupLogin,
} from './style'

function Header() {
  const { t } = useTranslation(["home"])

  const [Modalvisibility, setModaltvisibility] = useState(false)

  return (
    <Container>
      <Logo>
        <img src="/LogoTripax.svg" alt='Logo' />
      </Logo>
      <Menu>
        <LangCurrencyWrapper>
          <LangCurrency onClick={() => setModaltvisibility(true)}>
            <button><img src={t('Flag')} alt="" />{t('LanguageBtn')}</button>
            <button>$ USD</button>
          </LangCurrency>
          {Modalvisibility && <Modal handleClose={() => setModaltvisibility(false)} />}
        </LangCurrencyWrapper>
        <SignupLogin>
          <button>{t("Login")}</button>
          <button>{t("Register")}</button>
        </SignupLogin>
      </Menu>

    </Container >
  )
}

export default Header;
