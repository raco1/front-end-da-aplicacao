import styled from "styled-components";

export const Container = styled.span`

    padding: 0.5rem 1.6rem;
    text-align: center;
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TAG_TEXT_COLOR};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
    border-radius: 0.8rem;
`;