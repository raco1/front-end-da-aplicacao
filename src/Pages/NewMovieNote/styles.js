import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 11.6rem auto;

    > main {
        overflow-y: scroll;
        padding: 4rem 12.3rem;

        button > a {
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        h1{
            margin-top: 2.4rem;
            font-size: 3.6rem;
            font-weight: 500;
        }
    }

    > main::-webkit-scrollbar-track{
        border-radius: 0.8rem;
	    background-color: transparent;
    }
    > main::-webkit-scrollbar{
        width: 0.8rem;
	    
    }
    > main::-webkit-scrollbar-thumb{
        border-radius: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Form = styled.form`

    width: 100%;
    margin-top: 4rem;
    gap: 4rem;

    display: flex;
    flex-direction: column;

    > .col-inputs {
        display: flex;
        gap: 4rem;
    }

    > h2 {
            color: ${({ theme}) => theme.COLORS.NOTE_TEXT_COLOR};
            font-size: 2rem;
            font-weight: 400;
    }
    
    > section {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_DELETE_BUTTON};

        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2.4rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        margin-bottom: 4rem;
    }

    > button:last-child{
        width: 50%;
        align-self: center;
        margin-bottom: 4rem;
    }
`;