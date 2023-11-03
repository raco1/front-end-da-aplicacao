import styled from "styled-components";

export const Container = styled.button`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.4rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-size: 1.6rem;
    font-weight: 400;

    border: none;
    border-radius: 0.8rem;
`;