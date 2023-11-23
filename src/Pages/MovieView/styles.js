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

    > button:first-child{
      margin-bottom: 2.4rem;
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

export const Content = styled.div`
    display: flex;
    width: 100%;
    gap: 1.6rem;
    flex-wrap: wrap;
    flex-direction: column;

    > header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
        h3 {
          font-size: 3.6rem;
          font-weight: 500;
        }
        .rating {
          svg{
            color: currentColor;
            }
        }
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    
    > footer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 4rem 0;
        height: 3rem;
        gap: 0.8rem;
    }

    > section {
        p{
          text-align: justify;
        }
    }
    `