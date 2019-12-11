import styled from 'styled-components';

export const CategoriesStyled = styled.div`

    .container {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    h1{
        margin-bottom: 20px;
    }

    /* Cards */
    .card {
        align-items: flex-end;
        border: 1px solid #E4E4E6;
        border-radius: 8px;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        flex-direction: row;
        min-height:150px;
        cursor: pointer;
        flex: 1;
    }

    .card-item {
        display: flex;
        align-items: stretch;
        margin-bottom: 30px;
    }

    .card:hover{
        border: 1px solid #0467DB;
    }

    .card-body {
        align-items: flex-end;
        display: flex;
        padding: 16px;
        padding: 1rem;
        word-break: break-word;
    }

    .card-title {
        margin: 0;
    }

`;

export const LoaderStyled = styled.div`

    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;

    .spinner-border {
        color: #343C58!important;
        margin-bottom: 10px;
    }

`;
