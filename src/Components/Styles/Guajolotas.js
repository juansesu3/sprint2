import styled from "styled-components";

export const Gridfather = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-rows: 0px 120px   0px ;
    row-gap: 20px;
    background-color: #F2F2F2;
    /* border: 2px solid green; */
`;

export const Gridson = styled.div`
    grid-column: 2/11;
    grid-row: 2/2;  
    background-color: #FFFFFF;
    /* border: 2px solid red; */
    padding: 0px 15px;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #8585856a;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .grid-bebidas{
        grid-column: 2/11;
    }
`;

export const Gridsonofson = styled.div`

    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    grid-column: 1/11;
    grid-row: 1/2; 
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* border: 2px solid pink; */
    list-style: none;
    padding: 0px 0px;
    font-family: 'Inter', sans-serif;
    
`;

export const Gridss1 = styled.li`
    /* border: 2px solid fuchsia; */
    grid-column: 1/5;
    grid-row: 1/4; 

`;
export const Gridss2 = styled.li`
    /* border: 2px solid yellowgreen; */
    grid-column: 5/11;
    grid-row: 2/2;
    font-weight: 600;
    font-size: 17px;
    font-style: normal;
    padding: 0px 5px;
    color: #0D0D0D;
    
`;
export const Gridss3 = styled.li`
    /* border: 2px solid red; */
    grid-column: 5/11;
    grid-row: 3/4;
    font-weight: 600;
    font-size: 14px;
    color: #FA4A0C;
    font-style: normal;
    padding: 0px 5px;

`;

export const Gridss4 = styled.button`
    /* border: 2px solid blue; */
    grid-column: 8/11;
    grid-row: 3/3;
    border-radius: 30px;
    background-color: #FA4A0C;
    border:none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #F6F6F9;
    &:hover{
        color: #969696;
        cursor: pointer;
        box-shadow: 5px 5px 10px #8585856a;
    }

`;