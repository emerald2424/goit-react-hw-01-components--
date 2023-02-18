import styled from 'styled-components';

export const Table = styled.table`
    width: 680px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    
    th, td {
        padding: 20px 80px;
        text-align: center;
    }
    
    tr:nth-child(even) {
        background-color: #ebf2fc;
    }
    
    th {
        text-transform: uppercase;
        background-color: #54c7ec;
        color: #FFFFFF;
        
    }

    th:first-child {
        border-top-left-radius: 4px;
    }
    th:last-child {
        border-top-right-radius: 4px;
    }

    /* th:not(:last-child) {
        border-right: 1px solid #FFFFFF;
    } */
    
    td {
        text-transform: capitalize;
        color: grey;
    }
    td:not(:last-child) {
        border-right: 1px solid #d4d5d8;
    }
`;
