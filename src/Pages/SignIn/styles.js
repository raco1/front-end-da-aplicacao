import styled from "styled-components";
import backgroundImg from '../../assets/backgroundpic.jpeg'

export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`

    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;

    padding: 0 13.6rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
        font-weight: 700;
        margin-top: 6rem;
    }

    > p{
        color: ${({ theme }) => theme.COLORS.SPAN_TEXT_COLOR};
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 4.8rem;
    }

    > h2{
        color: ${({ theme }) => theme.COLORS.DEFAULT_TEXT_COLOR};
        font-size: 2.4rem;
        font-weight: 500;
        align-self: left;

        margin-bottom: 4.8rem;
    }
    > div:nth-child(5){
        margin-bottom: 2.4rem;
    }
    > button{
        margin-bottom: 4.2rem;
    }
    
    > button > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.6rem;
        font-weight: 400;
        margin: auto;
    }
`;

export const Background = styled.div`

    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.7;
`;