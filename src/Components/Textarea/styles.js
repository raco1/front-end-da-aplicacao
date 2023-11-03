import styled from "styled-components";

export const Container = styled.textarea`

    width: 100%;
    height: 27.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
    color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};

    resize: none;
    border: none;
    border-radius: 1rem;

    padding: 1.9rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    font-weight: 400;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};
        font-size: 1.4rem;
    }

`;