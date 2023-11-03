import styled from "styled-components";

export const Container = styled.div`

    > header {
        width: 100%;
        height: 14.4rem;
        background: rgba(255, 133, 155, 0.05);

        display: flex;
        align-items: center;
        padding-left: 16.8rem;

        a {
            text-align: center;
            font-family: Roboto Slab;
            font-size: 1.6rem;
            font-weight: 400;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`

    max-width: 34rem;
    margin: 3rem auto 0;

    > button:last-child{
        margin-top: 2.4rem;
    }

    > div:nth-child(4){
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`

    position: relative;
    margin: -12rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        border-radius: 50%;
        border: 2px solid  ${({ theme }) => theme.COLORS.PINK};
        width: 18.6rem;
        height: 18.6rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 1rem;
        bottom: 0.4rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2.8rem;
            height: 2.8rem;          
            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }
`;