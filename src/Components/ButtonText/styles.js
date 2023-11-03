import styled from "styled-components";

export const Container = styled.button`

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};

    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
`;