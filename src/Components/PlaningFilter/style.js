import styled from "styled-components";

const PlaningFilter = styled.div`

    display: flex;   
    width: 100%;
    z-index:99999;

    

    .Search {


        &> label {
            position: absolute;
            background: transparent;
            width: 100%;
            left: 20px;
            font-size:16px;
            color: #262626;
            top: 23px;
            cursor: pointer;
            transition: 0.4s ;
        }


        &> input:focus + label {
            top: 9px;
            font-size:12px;
            color:#737373;
        }
        &> input:valid + label {
            top: 9px;
            font-size:12px;
            color:#737373;
        }
    }

`;

const PlaningContainer = styled.div`

    position: relative;        
    
    &> label {
        position: absolute;
        font-size:12px;
        top: 9px;
        left: 20px;
        color :#737373;
    }

    
    & > input  {
        position: relative;
        height: 65px;
        width: 100%;
        font-size:16px;
        color: #262626;
        border: none;
        background-color: #fff; 
        outline: none;
        text-align:left;
        padding: 0 20px 0 20px;
        cursor: pointer;
        
        
        
        &::-webkit-datetime-edit-fields-wrapper  {
            z-index:1;
        }
        
        &::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: 100%;
            width: 100%;
            left: -20px;
            right: 20px;
            position: absolute;
            top: 0;
            width: auto;
        }

        :last-child{
            width: 100%;
            min-width:150px;
            background-color:#f2643d;
            border-radius:0 4px 4px 0;
            color: #fff;
        }
    }
    
    
    &:nth-child(1) {
        width: 440px;
        border-right: solid 1px #d9d9d9;
        border-radius:4px 0 0 4px;
        z-index: 99999;
    }
     
    
    &:nth-child(2) {
        width: 174px;
        border-right: solid 1px #d9d9d9;
        
    }

    &:nth-child(3) {
        width: 174px;
        border-right: solid 1px #d9d9d9;
    }
    
    &:nth-child(4) {
        width: 227px;
        border-right: solid 1px #d9d9d9;
    }
    
 `;



export {
    PlaningFilter,
    PlaningContainer

}