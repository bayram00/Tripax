import React, { useState, useContext, useEffect } from 'react';
import { HeroContext } from '../../../Context/HeroContext'
import {
    Wrapper,
    BackDrop,
    Container,
    Row,
    CountWrapper,
    Title,
    BtnCounter,
    Count

} from './style'

const PlaningRomandGuest = ({ visibilityHidde }) => {

    const { RoomeGuestDispatch } = useContext(HeroContext)

    const [Room, setRoom] = useState(0)
    const [Adults, setAdults] = useState(1)
    const [Children, setChildren] = useState(0)

    useEffect(() => {

        RoomeGuestDispatch(Room, Adults, Children)

    }, [Room, Adults, Children])

    //Romm ( + - ) Controller
    const RoomPlus = (e) => {
        const MaxRoom = 5;
        Room < MaxRoom ? setRoom(Room + 1) : setRoom(Room)

    }

    const RoomMinus = () => {
        const MinRoom = 1
        Room >= MinRoom ? setRoom(Room - 1) : setRoom(Room)
    }

    //Adults (+ - ) Controller
    const AdultsPlus = () => {
        const MaxAdults = 2;
        Adults < MaxAdults ? setAdults(Adults + 1) : setAdults(Adults)
    }

    const AdultsMinus = () => {
        const MaxAdults = 1
        Adults > MaxAdults ? setAdults(Adults - 1) : setAdults(Adults)
    }


    //Childeren (+ - ) Controller
    const ChildrenPlus = () => {
        const MaxChildren = 2;
        Children < MaxChildren ? setChildren(Children + 1) : setChildren(Children)
    }

    const ChildrenMinus = () => {
        const MinChildren = 0
        Children > MinChildren ? setChildren(Children - 1) : setChildren(Children)
    }



    return (
        <Wrapper>
            <BackDrop onClick={() => visibilityHidde()}></BackDrop>
            <Container>
                <Row>
                    <Title>Room</Title>
                    <CountWrapper>
                        <BtnCounter onClick={() => RoomMinus()} ><i class="fas fa-minus"></i></BtnCounter>
                        <Count>{Room}</Count>
                        <BtnCounter onClick={() => RoomPlus()} ><i class="fas fa-plus"></i></BtnCounter>
                    </CountWrapper>
                </Row>
                <Row>
                    <Title>Adults</Title>
                    <CountWrapper>
                        <BtnCounter onClick={() => AdultsMinus()}><i class="fas fa-minus"></i></BtnCounter>
                        <Count>{Adults}</Count>
                        <BtnCounter onClick={() => AdultsPlus()} ><i class="fas fa-plus"></i></BtnCounter>
                    </CountWrapper>
                </Row>
                <Row>
                    <Title>Children (0-12)</Title>
                    <CountWrapper>
                        <BtnCounter onClick={() => ChildrenMinus()}><i class="fas fa-minus"></i></BtnCounter>
                        <Count>{Children}</Count>
                        <BtnCounter onClick={() => ChildrenPlus()}><i class="fas fa-plus"></i></BtnCounter>
                    </CountWrapper>

                </Row>
            </Container>
        </Wrapper>

    )
};

export default PlaningRomandGuest;
