import SopraBankingResponseScreen from '../SopraBankingResponseScreen';
import React from 'react';
import { renderWithThemeProvider, cleanup } from 'utils/test/render.utils';

afterEach(cleanup);

describe('<SopraBankingResponseScreen />', () => {
  it('render SopraBankingResponseScreen with error message', () => {
    const params = { params: { variant: 'error' } };
    const rendered = renderWithThemeProvider(
      <SopraBankingResponseScreen route={params} />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('render SopraBankingResponseScreen with success message', () => {
    const params = { params: { variant: 'success' } };
    const rendered = renderWithThemeProvider(
      <SopraBankingResponseScreen route={params} />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
