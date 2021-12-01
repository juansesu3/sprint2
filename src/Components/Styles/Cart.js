import styled from "styled-components";

export const GriddCartpapa = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-rows: 70px   ;
    background-color: #F2F2F2;
    padding-bottom: 20px;

`;
export const GriddCarthijos1 = styled.div`
    /* border: 2px solid green; */
    grid-column: 1/3;
    grid-row: 1/2; 
    text-align :center ;
    padding: 25px;
    color: black;

`;
export const GriddCarthijos2 = styled.div`
    /* border: 2px solid fuchsia; */
    grid-column: 3/11;
    grid-row: 1/2;  
   font-family: 'Inter', sans-serif;;
   font-weight: 600;
   font-style: normal;
   font-size: 17px;
   /* text-align: center; */
   padding: 22px 70px ;
`;
export const GriddCarthijos3 = styled.div`
    /* border: 2px solid red; */
    grid-column: 1/11;
    grid-row: 2/2;  

`;

export const TotalCont = styled.div`
    grid-column: 2/10;
    grid-row: 3/3;
    background-color: #FFFFFF;
    /* border: 2px solid red; */
    height: 60px;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 5px 5px 10px #8585856a;

    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(7, 1fr);
    
`;

export const Texttotal =styled.div`

    /* border: 2px solid red; */
    grid-column: 2/5;
    grid-row: 4/4;
    font-family: 'Inter', sans-serif;;
   font-weight: 600;
   font-style: normal;
   font-size: 17px;
`;
export const Pricetotal =styled.div`
    /* border: 2px solid green; */
    grid-column: 6/11;
    grid-row: 4/4;
    font-family: 'Inter', sans-serif;;
    font-weight: 600;
    font-style: normal;
    font-size: 17px;
    color: #FA4A0C ;
    text-align: end;

`;

export const BtnPay = styled.button`
    grid-column: 2/10;
    grid-row: 4/4;  
    
    background-color:#FA4A0C ;
    color: #F6F6F9;
    border: none;
    border-radius: 45px;
    font-family: 'Inter', sans-serif;;
    font-weight: 600;
    font-style: normal;
    font-size: 17px;
    line-height: 20,57;
    text-align: center;
    height: 70px;
    box-shadow: 5px 5px 10px #8585856a;

`;
export const ImageCart = styled.img`

    /* margin-left: auto;
    margin-right: auto; */
    padding:  27%;

`;
