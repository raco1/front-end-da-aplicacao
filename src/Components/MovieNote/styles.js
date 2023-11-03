import styled from "styled-components";

export const Container = styled.button`

    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_NOTES};
    
    border-radius: 1.6rem;
    border: none;

    padding: 3.2rem;
    margin-bottom: 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 1.6rem;

    > h3 {
        flex: 1;
        text-align: left;
        color: ${({ theme }) => theme.COLORS.DEFAULT_TEXT_COLOR};
        font-size: 2.4rem;
        font-weight: 700;    
    }

    > .rating {
        align-self: self-start;
    }

    > div {
        > p{
            color: ${({ theme }) => theme.COLORS.NOTE_TEXT_COLOR};
            font-family: Roboto;
            font-size: 1.6rem;
            font-weight: 400;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
    }  
    }
          
    footer {
        width: 100%;
        display: flex;
        gap: 8px;
    }

`;