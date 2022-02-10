import styled from 'styled-components'

const Wrapper = styled.div`
   
`;

const BackDrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    z-index: 9;
`;

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 248px;
    height: 164px;
    background: #fff;
    border-radius:4px;
    margin:  3px 0 0 0;
    padding: 20px 20px 20px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    z-index: 99999;
`;


const Row = styled.div`
    display: flex;
    justify-content: space-between; 
`;


const Title = styled.h1`
    font-size:14px;
    color: #262626;
`;


const CountWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: 76px;

`;

const BtnCounter = styled.button`
    width: 27px;
    height: 27px;
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 9px;
    background: #fff;
    border: solid 1px #d9d9d9;
    border-radius:50%;
    cursor: pointer;

    :hover {
        background-color: #3859ff;
        color: #fff;
    }

        >i {
        line-height:5px;
         font-size:9px;
        }
`;

const Count = styled.h1`
    font-size:16px;
    color: #262626;
`


export {
    Wrapper,
    BackDrop,
    Container,
    Row,
    CountWrapper,
    Title,
    BtnCounter,
    Count
}