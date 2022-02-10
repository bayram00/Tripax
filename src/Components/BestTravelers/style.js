import styled from 'styled-components';

const Wrapper = styled.div`
max-width:1170px;
padding: 0 10px;
margin: 0 auto;
overflow: hidden;

`;

const Title = styled.h1`
color: #2b2b2b;
font-size:40px;
font-weight:300;
margin: 60px 0 20px 0;
`

const Container = styled.div`
    width: 100%;
    height: 310px ;
    border-radius: 4px; 
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: url("/BestPopularbg.jpg") 
`;

const BestUser = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    overflow: hidden;
    margin: 44px 0;
`;

const Userİnfo = styled.div`
    display: flex;
    width: 130px;
    flex-direction:column;
    margin: 0 17px 0 17px;
    align-items:center;

    > img {
        width:83px;
        height: 83px;
        border-radius:50%;
    }

`;

const UserName = styled.h1`
    font-size:18px;
    white-space: nowrap;
    font-weight:500;
    margin-top: 10px; 
    color: #fff;
`;

const UserTrip = styled.h1`
    font-size:12px;
    color: #fff;
    opacity: 0.8;
`


const MorePeople = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 1170px;

`;

const İmgContainer = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    display: flex;
    > img {
        position: absolute;
        display: block;
        width:50px;
        height: 50px;
        border-radius:50%;

        :nth-child(3) {
            margin-left: 30px;
        }
        :nth-child(2) {
            margin-left: 60px;
        }

        :nth-child(1) {
            margin-left:90px;
        }
    }

`;

const MoreButton = styled.button`
    width: 150px;
    height: 50px;
    border-radius:5px;
    border:solid 1px #fff;
    background: transparent;
    color: #fff;
    font-size:14px;
    cursor: pointer;
`

export {
    Wrapper,
    Container,
    Title,
    BestUser,
    Userİnfo,
    UserName,
    UserTrip,
    MorePeople,
    İmgContainer,
    MoreButton
}