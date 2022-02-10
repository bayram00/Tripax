import styled from 'styled-components';


const BackDrop = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0px;
`;

const Wrapper = styled.div`
width: 440px;
background: #fff;
border-radius: 4px;
box-shadow: 0 2px 4px 0 rgb(38 38 38 / 13%);
margin-top: 3px; 
z-index: 88888; 
    `;

const Container = styled.div`
position: absolute;
    background: #fff;
    z-index: 9999;
    width: 440px;
`;

const ListContainer = styled.div`
        display: flex;
        padding: 9px 30px;
        align-items:center;
        justify-content:space-between;
`;


const List = styled.div`
    height: 54px;
    display: flex;
    flex-direction: column;
    justify-content:center;
`;


const Title = styled.h1`
    font-size:16px;
    color: #262626;
`;

const Small = styled.small`
    font-size:12px;
    color:#737373;
`;

const Popular = styled.button`
width: 72px;
height: 26px;
padding: 5px 10px 4px;
border: none;
outline: none;
border-radius: 4px;
background-color: rgba(56, 89, 255, 0.11);
font-size: 11px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #3859ff;
`;


export {
    BackDrop,
    Wrapper,
    Container,
    ListContainer,
    List,
    Title,
    Small,
    Popular
}