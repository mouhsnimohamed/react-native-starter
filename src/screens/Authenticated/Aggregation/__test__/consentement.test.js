import { aggregationReducer } from 'modules/aggregation/aggregation.reducer';
import React from 'react';
import { cleanup, render } from 'utils/test/render.utils';
import Consentement from '../Consentement';

afterEach(cleanup);

describe('<Consentement />', () => {
  test('render Consentement correctly', async () => {
    const rendered = render(<Consentement />, {
      reducers: {
        [aggregationReducer]: aggregationReducer,
      },
    }).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
