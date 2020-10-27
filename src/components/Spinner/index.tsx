import React from 'react';
import styled from 'styled-components/native';

const Spinner: React.FC = () => {
  return (
    <Container>
      <ActivityIndicatorContainer size="large" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActivityIndicatorContainer = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.primary};
`;

export default Spinner;
