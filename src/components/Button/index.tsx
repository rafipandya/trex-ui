import React from "react";
import { StyledButton } from "./styled";

export interface ButtonProps {
    label: string;
    disabled?: boolean;
    mode?: "fill" | "outline" | "plain";
    onClick?: () => void;
}

const TButton: React.FC<ButtonProps> = ({ label, disabled, mode = "plain", onClick }) => {
    return (
        <StyledButton $mode={mode} disabled={disabled} onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default TButton;
