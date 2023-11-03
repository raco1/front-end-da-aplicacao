import styled from "styled-components";

export const Container = styled.div`

    > header {

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 40rem;
        gap: 1.6rem;

        h3 {
            font-size: 3.6rem;
            font-weight: 500;
        }
        .rating {
            svg{
                color: currentColor;
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
`;