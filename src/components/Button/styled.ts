import styled from "styled-components";
import { colors } from "../../theme/colors";

type ButtonMode = "fill" | "outline" | "plain";

interface StyledButtonProps {
    $mode?: ButtonMode;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;

    ${(props) => {
        switch (props.$mode) {
            case "fill":
                return `
                    background-color: ${colors.primary[500]};
                    color: white;
                    border: none;

                    &:hover:not(:disabled) {
                        background-color: ${colors.primary[600]};
                    }

                    &:active:not(:disabled) {
                        background-color: ${colors.primary[700]};
                    }

                    &:disabled {
                        background-color: ${colors.neutral[300]};
                        cursor: not-allowed;
                    }
                `;
            case "outline":
                return `
                    background-color: transparent;
                    color: ${colors.primary[500]};
                    border: 2px solid ${colors.primary[500]};

                    &:hover:not(:disabled) {
                        background-color: ${colors.primary[50]};
                    }

                    &:active:not(:disabled) {
                        background-color: ${colors.primary[100]};
                    }

                    &:disabled {
                        color: ${colors.neutral[300]};
                        border-color: ${colors.neutral[300]};
                        cursor: not-allowed;
                    }
                `;
            case "plain":
                return `
                    background-color: transparent;
                    color: ${colors.primary[500]};
                    border: none;

                    &:hover:not(:disabled) {
                        background-color: ${colors.primary[50]};
                    }

                    &:active:not(:disabled) {
                        background-color: ${colors.primary[100]};
                    }

                    &:disabled {
                        color: ${colors.neutral[300]};
                        cursor: not-allowed;
                    }
                `;
        }
    }}
`;
