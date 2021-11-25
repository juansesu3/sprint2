import React from 'react'
import styled from 'styled-components'

export const Gridp = styled.div`

        font-family: 'Inter', sans-serif;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-template-rows: 100px 0px 170px 80px 50px 50px;
        background-color: #F2F2F2;
        /* border: 1px solid green; */

`

export const Grid1 = styled.div`
  
    grid-column: 1/3;
    grid-row: 1/2;  
    background-color: #F2F2F2;
    padding: 24px 24px;


`

export const Grid2 = styled.div`
   
    grid-column: 9/11;
    grid-row: 1/2;  
    background-color: #F2F2F2;
    /* border: 1px solid blue; */
    padding: 44px 0px 0px 24px;
    color: #a0a0a0;


`

export const Grid3 = styled.div`
   
    grid-column: 1/12;
    grid-row: 2/4; 
     
    background-color: #F2F2F2;
    /* border: 1px solid pink; */
    font-style: normal  ;
    font-weight: bold;
    font-size: 34px;
    line-height: 35px;
    font-family: 'Inter', sans-serif;
    padding: 20px 24px;


`

export const Grid4 = styled.div`
    
    grid-column: 2/3;
    grid-row: 4/4; 
    background-color: transparent;
    /* border: 1px solid violet; */
    cursor: pointer;
    padding: 20px 20px;
    color: #3838389e;
    font-size: 20px;

    z-index: 10;


`

export const Grid5 = styled.div`
   
    grid-column: 2/10;
    grid-row: 4/4;  
    background-color: #F2F2F2;
    /* border: 1px solid black; */

    z-index: 1;


`

export const Grid6 = styled.div`
    background-color: #F2F2F2;
    grid-column: 2/3    ;
    grid-row: 6/7;  
    /* border: 1px solid pink; */
    text-align: center;


`

export const Grid7 = styled.div`
    background-color: #F2F2F2;
    grid-column: 4/7;
    grid-row: 6/8;  
    padding: 0px 0px 0px 0px;
    /* border: 1px solid pink; */
    text-align: center;


`

export const Grid8 = styled.div`
    background-color: #F2F2F2;
    grid-column: 8/10;
    grid-row: 6/7;  
    /* border: 1px solid pink; */
    text-align: center;


`



export const Input = styled.input`
    background-color: #E7E7E7;
    color: black;
    text-align: center;
    width: 90%;
    height: 60px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    &:focus {
                border: none;
            }
    
`




