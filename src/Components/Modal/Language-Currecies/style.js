import styled from 'styled-components';

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index:999;
    display: flex;
    justify-content: center;
`;

const Modal = styled.div`
    position: absolute;
    width: 538px;
    height: 267px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin: 75px 0px 0 0;
    padding: 12px 15px 20px;
    background: #ffff;
    border-radius:4px;
    z-index:9999;
    box-shadow : 0 2px 4px 0 rgba(38, 38, 38, 0.13);
`;

const ModalSection = styled.div`

`;

const ModalUl = styled.ul`
display: flex;
align-items:center;
justify-content: space-between;

margin: 18px 0;

  > select {
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat:no-repeat;
    background-position-y: center;
    padding: 0px 20px;
    background-size: 20px; 
    border: none;
  }

`;

const ModalLi = styled.li`
    font-size:14px;
    color: #262626;
    margin: 0 25px 0 5px;
    cursor: pointer;
  

    &.Active {
        background-color:#ebeeff; 
        color: #3859ff;
    }

`;




const ModalTitle = styled.div`
    font-size:18px;
    color: #262626;
    
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items:center; 

    > button {
        width: 90px;
        height: 40px;
        padding: 7px 23px 9px;
        border-radius:4px;
        background-color:#3859ff;
        color: #fff;
        font-size:12px;
        font-weight:500;
        text-align:center;
        border: none;
        cursor: pointer;

        :first-child {
            background: #fff;
            color: #737373;
        }
    }

`;

export {
    Backdrop,
    Modal,
    ModalSection,
    ModalUl,
    ModalLi,
    ModalTitle,
    ButtonContainer
}