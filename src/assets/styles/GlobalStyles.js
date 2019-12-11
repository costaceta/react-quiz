import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    /* font-family: 'Raleway', sans-serif; */
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    body {
        background: #E5E5E5;
        font-family: 'Raleway',  sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }

    /* Modal */
    .modal-dialog {
        max-width: 328px;
        max-height: 228px;
        height: 100%;
    }

    .modal-content {
        border-radius: 8px;

        width: 328px;
    }

    .modal-body {
        align-items: center;
        box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        color: #343C58;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px;

        svg {
            margin-bottom: 14px;
        }

        .btn {
            background: #0467DB;
            border-radius: 8px;
            color: #fff;
            display: flex;
            font-weight: bold;
            margin-top: 40px;
            margin: 40px auto 0;
            padding: 11px 24px;

            svg {
                margin: 4px 0 0 40px;
            }
        }
    }

    .modal-error {
        .modal-body {
            border: 3px solid #FF4F4F;
        }
    }

    .modal-correct {
        .modal-body {
            border: 3px solid #32CB82;
        }
    }

`;
