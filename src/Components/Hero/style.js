import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: linear-gradient(44deg, #00000073 , transparent), url(/maldives-1993704_1280.jpg);
    background-repeat:  no-repeat;
    background-position: center;
    background-size:cover;
    display: flex;
    align-items:center;
    `;

const Section = styled.div`
    max-width: 1170px;
    width: 100%;
    height: 270px;
    margin: 0 auto;
    padding: 0 10px;
    `;

const Slogan = styled.div`
    display: flex;
    flex-direction:column;
    margin: 0 0 4px;
    
    & > span {
        width: 538px;
           color: #fff;
           font-size: 60px;
           line-height:60px;
           font-weight:bold;

        &:last-child {
            width: 511px;
            height: 46px;
            font-weight:normal;
            margin: 4px 27px 0 0;
            font-family: Prompt;
            font-size:30px;
            line-height:inherit;
        }

    }

    `;

const PlaningContainer = styled.div`
    display: flex;
    justify-contenet:flex-start;
`;

const RoomAndGuestContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 67.5%;

`;



const ModalRow = styled.div`
    width: 100%;
    
`

export {
    Wrapper,
    Section,
    Slogan,
    PlaningContainer,
    RoomAndGuestContainer,
    ModalRow
}