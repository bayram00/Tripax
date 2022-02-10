import React, { useEffect, useState } from 'react';

import {
  Wrapper,
  FotterContainer,
  Col,
  LogoRights,
  SocialMedya,
  RightsText,
  LangCurrency,
  FotterTitle,
  Selected,
  ColEach,
  ColTextEach
} from './style'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
function Fotter() {


  const { t } = useTranslation(['home'])
  const handleChange = (e) => {
    i18next.changeLanguage(e.target.value)
  }

  return (
    <Wrapper>
      <FotterContainer>

        <Col>
          <LogoRights>
            <img src="/tripax-footer-logo.svg" alt="" />
            <RightsText><span><i class="fas fa-copyright"></i> Tripax 2022</span><span>All Rights Reserved</span> </RightsText>
          </LogoRights>
          <SocialMedya>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
          </SocialMedya>
        </Col>

        <Col>
          <LangCurrency>
            <FotterTitle>Language/Currency</FotterTitle>

            <Selected
              value={localStorage.getItem('i18nextLng')}
              imgUrl={t("Flag")}
              onChange={handleChange}
            >
              <option value="English" >English</option>
              <option value="Turkce" >Turkce</option>

            </Selected>

            <Selected name='Currency'>
              <option value="USD">USD</option>
              <option value="Tr">TR</option>
            </Selected>

          </LangCurrency>
        </Col>


        <Col>
          <ColEach>
            <FotterTitle>Company</FotterTitle>
            <ColTextEach to="/About">About</ColTextEach>
            <ColTextEach to="/Blog">Blog</ColTextEach>
            <ColTextEach to="/Contact">Contact</ColTextEach>
          </ColEach>
        </Col>


        <Col>
          <ColEach>
            <FotterTitle>Legal</FotterTitle>
            <ColTextEach to="/Terms">Terms & Conditions</ColTextEach>
            <ColTextEach to="/Privacy">Privacy Policy</ColTextEach>
            <ColTextEach to="/Legal">Legal İnformation</ColTextEach>
          </ColEach>
        </Col>

        <Col>
          <ColEach>
            <FotterTitle>Explore</FotterTitle>
            <ColTextEach to="/howworks">How it works?</ColTextEach>
            <ColTextEach to="/Help">Help</ColTextEach>
            <ColTextEach to="/FAQs">FAQs</ColTextEach>
          </ColEach>
        </Col>


      </FotterContainer>
    </Wrapper>
  )
}

export default Fotter;
