import React, { useState, useContext, useEffect } from 'react';
import { HeroContext } from '../../Context/HeroContext';
import {useTranslation} from 'react-i18next'

import {
    PlaningFilter,
    PlaningContainer
} from './style'


function Planing() {

    const {t} = useTranslation(["home"])

    const { HandleSearch, setVisiblity, setPlaningVisibility, RoomAndGuest } = useContext(HeroContext)

    const [searchValue, setSearchValue] = useState("")
    const [StartData, setStartData] = useState("")
    const [EndData, setEndData] = useState("")


    useEffect(() => {
        HandleSearch(searchValue)
    }, [searchValue])


    const HandleSubmit = () => {
        //Post Request
        alert(RoomAndGuest + ' StartData ' + StartData + ' End Data ' + EndData)
    }

    return (
        <PlaningFilter>
            <PlaningContainer className='Search'>
                <input autoComplete='off' onFocus={() => setVisiblity(true)} onChange={(e) => setSearchValue(e.target.value)} required id='Search' type="search" />
                <label for="Search" >{t("İnputTitle.SearchTitle")}</label>
            </PlaningContainer>
            <PlaningContainer>
                <input onChange={(e) => setStartData(e.target.value)} type="date" value={StartData} name='Start' />
                <label >{t("İnputTitle.FirstDataİnput")}</label>
            </PlaningContainer>
            <PlaningContainer>
                <input onChange={(e) => setEndData(e.target.value)} value={EndData} type="date" name='End' />
                <label >{t("İnputTitle.LastDataİnput")}</label>
            </PlaningContainer>
            <PlaningContainer>
                <input  onClick={() => setPlaningVisibility(true)} type="button" value={RoomAndGuest} />
                <label >{t("İnputTitle.RoomAndGuest")}</label>
            </PlaningContainer>
            <PlaningContainer>
                <input onClick={() => HandleSubmit()} type="submit" value={t("İnputTitle.Button")} />
            </PlaningContainer>

        </PlaningFilter>
    )
}
export default Planing;


