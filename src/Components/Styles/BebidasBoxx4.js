import styled from "styled-components";


export const GridpaBebi = styled.div`
    display: grid;
    border:2px solid red;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;
export const GridhijBebida = styled.div`
    grid-column: 2/8;
    grid-row: 2/5;
    border:2px solid green;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
`;

export const GridhihijBebida = styled.div`
    border:2px solid red;
    grid-column: 1/11;
    grid-row: 1/2; 
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;

export const Gridhh1 = styled.li`
    border:2px solid red;
    grid-column: 1/5;
    grid-row: 1/4;
`;

export const Gridhh2 = styled.li`
    border:2px solid fuchsia;
    grid-column: 1/5;
    grid-row: 3/4;
`;

export const Gridhh3 = styled.li`
    border:2px solid orange;
    grid-column: 1/5;
    grid-row: 2/4;
`;

export const Gridhh4 = styled.li`
    border:2px solid blue;
    grid-column: 1/5;
    grid-row: 1/4;
`;