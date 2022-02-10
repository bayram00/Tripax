import React, { useState } from 'react';
import Planing from '../PlaningFilter';
import PlaningSearchModal from '../Modal/PlaningSearch/inedx';
import PlaningRomandGuest from '../Modal/PlaningRomandGuest/inedx';
import { HeroContext } from '../../Context/HeroContext';
import { useTranslation } from 'react-i18next'
import {
  Wrapper,
  Section,
  Slogan,
  PlaningContainer,
  RoomAndGuestContainer,
  ModalRow
} from './style'

function İndex() {

  const { t } = useTranslation(["home"])

  const Data = [

    {
      title: "Amsterdam",
      area: "Netheriands , Europe",
      popular: true,
    },
    {
      title: "Rotterdam",
      area: "Netheriands , Europe",
      popular: false,
    },
    {
      title: "Zaans Shans",
      area: "Netheriands , Europe",
      popular: false,
    },
    {
      title: "Eindhoven",
      area: "Netheriands , Europe",
      popular: false,
    }

  ]

  //visibility
  const [visibility, setVisiblity] = useState(false);
  const [PlaningVisibility, setPlaningVisibility] = useState(false)

  const [Countrys, setCountrys] = useState("")

  const HandleSearch = (Value) => {
    setCountrys(Data.filter(data => {
      return data.title.toLowerCase().includes(Value.toLowerCase());
    }))
  }

  const [RoomAndGuest, setRoomAndGuest] = useState('Room And Guest')

  const RoomeGuestDispatch = (Room, Adults, Childiren) => {

    const RoomeGuestLayout = `${Adults} Adults , ${Childiren} Child`

    setRoomAndGuest(RoomeGuestLayout)
  }



  //Provider All Data 
  const ProviderData = {
    HandleSearch,
    setVisiblity,
    setPlaningVisibility,
    RoomeGuestDispatch,
    RoomAndGuest
  }

  return (
    <HeroContext.Provider value={ProviderData}>
      <Wrapper>
        <Section>
          <Slogan>
            <span>{t("slogan.row1")}</span>
            <span>{t("slogan.row2")}</span>
            <span>{t("slogan.row3")}</span>
          </Slogan>
          <Planing  />
          <ModalRow>
            <PlaningContainer>
              {visibility && <PlaningSearchModal Countrys={Countrys} visibilityHidde={() => setVisiblity(false)} />}
            </PlaningContainer>
            <RoomAndGuestContainer >
              {PlaningVisibility && <PlaningRomandGuest visibilityHidde={() => setPlaningVisibility(false)} />}
            </RoomAndGuestContainer>
          </ModalRow>
        </Section>
      </Wrapper>
    </HeroContext.Provider>
  )
}

export default İndex;
