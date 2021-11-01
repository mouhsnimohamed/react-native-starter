import SopraBanking from '../SopraBanking';
import React from 'react';
import { render, cleanup } from 'utils/test/render.utils';
import {
  AGGREGATION_REDUCER,
  aggregationReducer,
  initState,
} from 'modules/aggregation/aggregation.reducer';

afterEach(cleanup);

describe('<SopraBanking />', () => {
  it('render SopraBanking WebView correctly', () => {
    const rendered = render(<SopraBanking />, {
      reducers: {
        [AGGREGATION_REDUCER]: () =>
          aggregationReducer(
            {
              ...initState,
              sopraBankingURI: 'https://recettebes.bankofafrica.ma',
            },
            {},
          ),
      },
    }).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
