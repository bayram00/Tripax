import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: 319px;
    margin: 60px 0 0;
    background: #f2f2f2;
`;

const Container = styled.div`   
    max-width:1170px;
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:  0 auto;

`;


const BigText = styled.h1`
    width: 450px;
    text-align:center;
    font-size:40px;
    font-weight:300;
    line-height:40px;
    margin: 0 0 14px;
    color: #373737;
`;

const SmallText = styled.h1`
    font-size:15px;
    line-height:18px;
    letter-spacing: 0.35px;
    text-align:center;
    color: #313131;
`;

const İnputForm = styled.div`
    margin: 25px 0 0 ;
    display: flex;
    align-items:center;

`;

const İnputContainer = styled.div`

    > label {
        margin: -25px 0px;
    }
`;

const İnput = styled.input`
    display: block;
    width: 350px;
    height: 50px;
    padding: 15px 0 14px 15px;
    margin: 7px 5px;
    border: solid 1px #d9d9d9;
    background-color:#fff;
    border-radius:4px;
    outline: none;
    
    ::-webkit-input-placeholder {
        font-size:14px;
        letter-spacing:0.19px;
        line-height:1;
        color: #d9d9d9;
    }

`;

const Button = styled.button`
    width: 190px;
    height: 50px;
    margin: 20px 0 0 5px;
    padding: 13px 17px;
    border-radius:4px;
    background-color: #f2643d;
    border: none;
    cursor: pointer;
    font-size:16px;
    font-weight:500;
    text-align:center;
    color: #fff;

`;

const GoUpButton = styled.button`
    position: absolute;
    right: 46px;
    top: -23px;
    width: 46px;
    height: 46px;
    border-radius: 80px;
    border: none;
    background-color: #3859ff; 
    cursor: pointer;

    &> i{
        color: #fff;
    }



`;




export {
    Wrapper,
    Container,
    BigText,
    SmallText,
    İnputForm,
    İnputContainer,
    İnput,
    Button,
    GoUpButton
}