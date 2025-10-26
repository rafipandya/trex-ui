import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const StyledButton = styled.button`
    padding: 12px 24px;
    background-color: ${colors.primary[500]};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${colors.primary[600]};
    }

    &:active {
        background-color: ${colors.primary[700]};
    }

    &:disabled {
        background-color: ${colors.neutral[300]};
        cursor: not-allowed;
    }
`;
