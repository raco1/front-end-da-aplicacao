import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 12.3rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};


    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 6.4rem;

    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_IMG};
    border-bottom-style: solid;
    border-bottom-width: 1px;


    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        font-weight: 700;
    }
       
`

export const Profile = styled.div`

    display: flex;
    align-items: center;
    gap: 0.9rem;
    
    > div{
        display: flex;
        flex-direction: column;

        strong {
        font-size: 1.4rem;
        font-weight: 700;
        }
        button{
        color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};
        font-size: 1.4rem;
        font-weight: 400;
        align-self: flex-end;
        cursor: pointer;
        border: none;
        background:none;
        }
    }
    > a > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_IMG};
    }
`

export const Search = styled.div`
    width: 100%;

    font-size: 1.4rem;
    font-weight: 400;
`