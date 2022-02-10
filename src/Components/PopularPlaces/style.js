import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 10px;
    width: 100%;
    background: #fff;
`;

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 60px auto;
    padding:  0 10px;
`;

const Title = styled.div`
font-family: Prompt;
color: #262626;
font-size:40px;
font-weight:300;

`;

const PlaceContainer = styled.div`
    display: grid;
    gap:20px;
    margin-top: 20px; 
    grid-template-areas:
    'item1 item2  item3 item3'
    'item4 item5 item3 item3'
    'item4 item6 item6 item7';

  

`;

const Place = styled.div`

    position: relative;

    &> img {
        width: 100%;
        height: 100%;
    }

    &:nth-child(1) {
        grid-area: item1;
    }

    &:nth-child(2) {
        grid-area: item2;
    }

    &:nth-child(3) {
        grid-area: item3;
    }

    &:nth-child(4) {
        grid-area: item4;
    }

    &:nth-child(5) {
        grid-area: item5;
    }

    &:nth-child(6) {
        grid-area: item6;
    }

    &:nth-child(7) {
        grid-area: item7;
    }
        
        
`;

const PlaceTitleSection = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    white-space:nowrap;
    
    
    &:hover > button  {
        visibility: visible;
        margin: 11px 0 0 0;
        transition: 0.4s ease-in;
    }

    &:hover {
        background: #0000005c;
        transition: 0.4s ease-in;
    }

  
    &> button {
        width: 128px;
        height: 50px;
        padding: 13px 25px;
        margin: 11px 0 -60px 0;
        font-size:16px;
        font-wegiht:500;
        color:#fff;
        border: none;
        cursor: pointer;
        border-radius:4px;
        background-color: #f2643d; 
        transition: 0.4s ease-in;
        visibility: hidden;
    }
 
`;

const PlaceTitle = styled.div`
    :nth-child(1) {
        color: #ffffff;
        font-size:18px;
    }
    :nth-child(2){
        color:#ffffff;
        font-size:30px;
        font-weight:600;
     }
`;

const Price = styled.div`
    position: absolute;
    bottom: 6px;
    right: 8px;
    font-size:18px;
    opacity: 0.65;
    color: #fff;
    font-weight:600;

    &> span {
        font-size:12px;
    }

`;

export {
    Wrapper,
    Container,
    Title,
    PlaceContainer,
    Place,
    PlaceTitleSection,
    PlaceTitle,
    Price,

}