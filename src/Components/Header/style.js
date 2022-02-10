import styled from "styled-components";



const Container = styled.div`
        max-width: 1170px;
        width: 100%;
        height: 90px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 10px;
        overflow: hidden;
    `;

const Logo = styled.div`
        width: 161px;
        height: 40px;
    `;

const Menu = styled.div`
    display: flex;
    align-items:center;
    white-space: nowrap;

    `;

const LangCurrencyWrapper = styled.div`
    display: flex;
    justify-content:center;

`;

const LangCurrency = styled.div`
    display: flex;
    align-items:center;
    border: solid 1px #d9d9d9;
    border-radius:4px;
    cursor: pointer;


    & > button {
        display: flex;
        align-items:center;
        height: 40px;
        font-size:14px;
        color: #737373;
        padding: 0 14px;
        border: none;
        background: #fff;
        cursor: pointer;


            
        :first-child {
            border-right:1px solid #d9d9d9; 
        }

    
        & > img {
            margin-right : 2px;
            width:17px;
        }
    }
    
`;

const SignupLogin = styled.div`
    display: flex;
    align-items:center;

 


    &> button {
        height: 50px;
        width: 116px;
        background-color: #f2643d;
        padding: 13px 25px;
        border: none;
        border-radius:4px;
        font-family:Prompt;
        font-wegiht:500;
        font-size:16px;
        color:#fff;

        &:hover {
            cursor: pointer;
        }

        &:first-child {
            background-color: #fff; 
            color: #262626;
        }
    }
`;


export {
    Container,
    Logo,
    Menu,
    LangCurrencyWrapper,
    LangCurrency,
    SignupLogin,
}