import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 270px;
    background-color: #262626; 
    padding: 0 10px;
`;



const FotterContainer = styled.div`
    width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;




const Col = styled.div`
  
`;


const LogoRights = styled.div`
    display: flex;
    flex-direction:column;

    > img {
        width: 107px;
        height: 37px;
        margin: 3px 0 9px 0;
    }
`;

const SocialMedya = styled.div`

    > i {
        margin:0 30px 0 0 ; 
        font-size:25px;
        color: #fff;
    }
`;


const RightsText = styled.small`

    font-size:12px;
    margin: 9px 0 51px 0;
    color: #737373;


    >span {
        display: flex;
        margin: 3px 0px 0px;
    
            > i{
             margin: 0 2px 0 0;
            }

    }

`;


const LangCurrency = styled.div`
display: flex;
flex-direction:column;

`;

const FotterTitle = styled.div`
    margin: 0 7px 23px 0;
    font-size:18px;
    font-weight:500px;
    color: #737373;
`

const Selected = styled.select`
    width: 185px;
    height: 40px;
    margin: 0px 0 20px;
    padding: 10px 15px 9px 20px;
    border-radius: 4px;
    border:solid 0.5px #737373; 
    background: transparent;
    color: #737373;
    font-size:14px;
    cursor: pointer;


    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-position-y: center;
    background-origin: content-box;
    background-position-x: -15px;
    background-size: 17px;

`;

const ColEach = styled.div`
    display: flex;
    flex-direction:column;
`;

const ColTextEach = styled(Link)`
    text-decoration : none;
    font-size:16px;
    margin: 0 0 18px 0;
    font-weight:300;
    color:#737373;

`;


export {
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

}