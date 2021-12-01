import styled from "styled-components";

export const GrdAbu = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background-color: #F2F2F2;
    font-family: 'Inter', sans-serif;

`;
export const Grdt1 = styled.div`
    /* border:2px solid green; */
    grid-column: 1/2;
    grid-row: 1/2; 
    padding: 20px 10px;
`;
export const Grdt2 = styled.div`
    /* border:2px solid red; */
    grid-column: 10/11;
    grid-row: 1/2;
    padding: 20px 10px;

`;
export const Grdt3 = styled.div`
    /* border:2px solid pink; */
    grid-column: 1/11;
    grid-row: 2/5;
    margin: auto;

`;
export const Grdt4 = styled.div`
    /* border:2px solid fuchsia; */
    grid-column: 3/9;
    grid-row: 5/5;
    font-size: 28px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 33.89px ;
    text-align: center;
    margin: auto;


`;
export const Grdt5 = styled.div`
    /* border:2px solid blue; */
    grid-column: 4/8;
    grid-row: 6/6;
    font-size: 22px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 26.63px ;
    text-align: center;
    color:  #FA4A0C;
    margin: auto;
    padding-bottom: 20px;
;
`;

//start grid con hijos 
export const Grdph6 = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-rows: 60px 0px  0px ;
    grid-column: 3/9;
    grid-row: 7/7;
    /* border:2px solid blue; */
    background-color: #fffe;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #8585856a;
`;
export const Grdph61 = styled.button`
    border:2px solid black;
    grid-column: 1/5;
    grid-row: 1/1;
    margin: auto;
    font-size: 25px;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    &:hover{
        box-shadow: 5px 5px 10px #8585856a;
        background-color: #b3b3b3a1;
    }

`;
export const Grdph62 = styled.div`
 /* border:2px solid red; */
    grid-column: 5/8;
    grid-row: 1/1;
    margin: auto;
    font-size: 28px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 33.89px ;
    text-align: center;

`;
export const Grdph63 = styled.button`
    border:2px solid black;
    grid-column: 8/12;
    grid-row: 1/1;
    margin: auto;
    font-size: 25px;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    &:hover{
        box-shadow: 5px 5px 10px #8585856a;
        background-color: #b3b3b3a1;
    }
`;
//end grid con hijos 

export const Grdt7 = styled.div`

/* border:2px solid blue; */
    grid-column: 1/11;
    grid-row: 8/9;
    font-size: 20px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 24.2px ;
    padding: 15px 15px;
    
    color:  #0D0D0D;
    
`;

//start grid con hijos 
export const Grdph8 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    /* border:2px solid blue; */
    grid-column: 2/10;
    grid-row: 9/12;

`;

//end grid con hijos

export const Grdt9 = styled.div`
    /* border:2px solid blue; */
    grid-column: 1/11;
    grid-row: 12/13;
    font-size: 20px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 24.2px ;
    padding: 15px 15px;
    color:  #0D0D0D;

`;
export const Grdt10 = styled.div`
    /* border:2px solid blue; */
    grid-column: 1/11;
    grid-row: 13/14;
    font-size: 15px ;
    font-weight: 400 ;
    font-style: normal;
    line-height: 20.83px ;
    padding: 0px 15px;
    letter-spacing: 0.02em;
    color:  #0D0D0D;
`;

//start grid con hijos
;export const Grdph11 = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: repeat(12,1fr);
    

    grid-column: 1/11;
    grid-row: 12/20;
    /* border:2px solid red; */
`;
;export const Grdph111 = styled.div`
/* border:2px solid green; */
grid-column: 2/15;
    grid-row: 3/13;
    background-color: #f1f1f1;
    border-radius: 10px;


`;

;export const Grdph112 = styled.div`
/* border:2px solid yellow; */
    grid-column: 17/30;
    grid-row:3/13;
    background-color: #fffe;
    border-radius: 10px;


`;
;export const Grdph113 = styled.div`
/* border:2px solid fuchsia; */
    grid-column: 2/15;
    grid-row: 14/24;
    background-color: #fffe;
    border-radius: 10px;


`;
;export const Grdph114 = styled.div`
/* border:2px solid brown; */
    grid-column: 17/30;
    grid-row: 14/24;
    background-color: #fffe;
    border-radius: 10px;
`;
;export const Grdph115 = styled.div`
/* border:2px solid blue; */
    grid-column: 2/15;
    grid-row: 25/35;
    background-color: #fffe;
    border-radius: 10px;

`;
//end grid con hijos
//start grid con hijos
export const Grdph12 = styled.div`

display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column: 1/11;
    grid-row: 20/22;
    /* border:2px solid blue; */
    border-radius: 40px;
    background-color: #FA4A0C;
    height: 69px;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: 5px 5px 10px #8585856a;
`;
export const Grdph121 = styled.div`
/* border:2px solid blue; */
    grid-column: 1/11;
    grid-row: 3/3;
    font-size: 17px ;
    font-weight: 600 ;
    font-style: normal;
    line-height: 20.57px ;
    padding: 0px 5px;
    text-align: start;
    color:  #F6F6F9;

`;
export const Grdph122 = styled.div`
/* border:2px solid blue; */
    grid-column: 9/16;
    grid-row: 3/3;
    font-size: 17px ;
    font-weight: 400 ;
    font-style: normal;
    line-height: 20.57px ;
    padding: 0px 15px;
    text-align: end; 
    color:  #F6F6F9;
`;
//end grid con hijos


export const Imggua = styled.img`
width: 150px;
border-radius: 30px;
box-shadow: 5px 5px 10px  #8585856a;

`;


export const Btnplus = styled.button`
/* border: 2px solid green; */
background: none;
  border: 0;
  color: inherit;

`;