import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;

    > main {
        overflow-y: scroll;
        padding: 4rem 12.3rem 6.4rem;
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
