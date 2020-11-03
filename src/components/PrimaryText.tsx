import styled from 'styled-components/native';

interface PrimaryTextTypes {
  align?: string;
  bold?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  size?: number;
}

const PrimaryText = styled.Text<PrimaryTextTypes>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  text-align: ${({ align }) => align || 'center'};
  font-weight: ${({ bold }) => (bold ? 'bold;' : 'normal')};
  font-size: ${({ size, theme }) => size || theme.fontSize.medium}px;
  color: ${({ theme: { colors }, isPrimary, isSecondary }) =>
    isPrimary ? colors.primary : isSecondary ? colors.secondary : colors.text};
`;

export default PrimaryText;
