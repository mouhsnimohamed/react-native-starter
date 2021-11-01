import RefreshButton from '../components/RefreshButton';
import React from 'react';
import { renderWithThemeProvider, cleanup } from 'utils/test/render.utils';

afterEach(cleanup);

describe('<RefreshButton />', () => {
  it('render RefreshButton correctly', () => {
    const rendered = renderWithThemeProvider(<RefreshButton />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
