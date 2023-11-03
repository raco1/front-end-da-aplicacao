import styled from "styled-components";

export const Container = styled.div`

   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-rows: 11.6rem auto;

 > main {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
    padding: 4rem 12.3rem;
    overflow-y: auto;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    
    > button:last-child{
      width: 20%;
      margin: 4rem auto;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_DELETE_BUTTON};
      color: ${({ theme }) => theme.COLORS.PINK};
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