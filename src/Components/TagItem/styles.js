import styled from "styled-components";

export const Container = styled.div`
    

    position: relative;

    > input {

        background: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_INPUTS};

        color: ${({ theme }) => theme.COLORS.WHITE};

        border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.INPUTS_TEXT_COLOR}` : "none"};

        border-radius: 1rem;
        padding: 1.6rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.INPUTS_TEXT_COLOR};
            font-size: 1.6rem;
        }
    }

    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;

        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
    }

`;