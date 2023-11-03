import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
    color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};

    display: flex;
    align-items: center;
    border-radius: 1rem;
    margin-bottom: 8px;

    > input {
        width: 100%;
        height: 5.6rem;
        background: transparent;
        border: none;

        padding: 1.8rem 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;
        font-weight: 400;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};
            font-size: 1.4rem;
        }
    }

    > svg {
        margin-left: 1.2rem;
    }
`;