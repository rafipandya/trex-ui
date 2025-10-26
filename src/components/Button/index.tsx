import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
    label: string;
    disabled?: boolean;
}

const TButton: React.FC<ButtonProps> = ({ label, disabled }) => {
    return <StyledButton disabled={disabled}>{label}</StyledButton>;
};

export default TButton;
