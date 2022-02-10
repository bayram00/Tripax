import styled from 'styled-components';

const Wrappper = styled.div`
width: 100%;
padding: 0 10px;
background: #fff;
`

const Container = styled.div`
    position: relative;
    max-width:1170px;
    width: 100%;
    margin: 0 auto;
`;

const Title = styled.div`
    font-size:40px;
    color: #262626;
    font-weight: 300;
`;

const Slider = styled.div`
    display: flex;
    align-content:center;
    overflow: hidden;
    width: 100%;
    margin: 20px 0;
    scroll-behavior: smooth;
    
    `;

const Content = styled.div`
    margin: 0 20px 10px 0px;
    height: 100%;

    :nth-last-child(2) {
       margin: 0px;
    }
    
    &> img {
        width: 277px;
        height: 375px;
    }
`;

const ContentText = styled.div`
    margin: 10px 0;
`;

const Date = styled.div`
    font-size:14px;
    color: #737373;
    margin:10px 45px 4px 0;
`;

const Text = styled.div`
    font-size:18px;
    margin: 4px 0 10px;
    letter-spacing:-0.1px;
    color:#262626;
`;

const Prive = styled.div`
    font-size:22px;
    font-weight:600;
    color:#262626;

    &> span {
        margin: 5px 0 3px;
        font-size:14px;
        color: #737373;
    }
`;


const ButtonContent = styled.div`
    position: absolute;
    margin: 173px 0;
    display: flex;
    width: 100%;



`;

const Button = styled.div`
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    background: #f2f2f2;    
    cursor: pointer;
    
    &:hover {
        background: #262626;
        color: #f2f2f2;
        transition: 0.2s ease-in-out;
    }
    

    &> i {
        width: 8px;
        height: 14px;
    }

    :nth-child(1) {
        left: -23px;
    }

    :nth-child(2) {
        right:-23px;
    }

`;



export {
    Wrappper,
    Container,
    Title,
    Slider,
    Content,
    ContentText,
    Date,
    Text,
    Prive,
    ButtonContent,
    Button
}