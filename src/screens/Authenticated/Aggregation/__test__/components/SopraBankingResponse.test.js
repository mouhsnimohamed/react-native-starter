import SopraBankingResponse from '../../components/SopraBankingResponse';
import React from 'react';
import { renderWithThemeProvider, cleanup } from 'utils/test/render.utils';

afterEach(cleanup);

describe('<SopraBankingResponse />', () => {
  it('render SopraBankingResponse with error message', () => {
    const mockOnPress = jest.fn();
    const rendered = renderWithThemeProvider(
      <SopraBankingResponse
        variant="error"
        title={'Error title'}
        CTATitle={'Retry'}
        onPress={mockOnPress}
      />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('render SopraBankingResponse with success message', () => {
    const mockOnPress = jest.fn();
    const rendered = renderWithThemeProvider(
      <SopraBankingResponse
        variant="success"
        title={'Success title'}
        CTATitle={'Close'}
        onPress={mockOnPress}
      />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
