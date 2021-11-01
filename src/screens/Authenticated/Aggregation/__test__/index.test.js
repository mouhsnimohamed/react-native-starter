import React from 'react';
import { render, cleanup } from 'utils/test/render.utils';
import { initState } from 'modules/beneficiary/beneficiary.reducer';
import {
  aggregationReducer,
  AGGREGATION_REDUCER,
} from 'modules/aggregation/aggregation.reducer';
import Banks from '../index';
afterEach(cleanup);

jest.useFakeTimers();

describe('<Banks />', () => {
  const navigation = {
    addListener: jest.fn(),
  };
  it('render Empty Banks list', () => {
    const rendered = render(<Banks navigation={navigation} />, {
      reducers: {
        [AGGREGATION_REDUCER]: aggregationReducer,
      },
    }).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('render Banks correctly', () => {
    const rendered = render(<Banks navigation={navigation} />, {
      reducers: {
        [AGGREGATION_REDUCER]: () =>
          aggregationReducer(
            {
              ...initState,
              banks: [
                {
                  id: '60a3b97628982178073991e7',
                  nationalId: 'fr-cic-ob',
                  icon: 'https://cdn.tink.se/provider-images/fr/fr-cic.png',
                  name: 'Crédit Industriel et Commercial',
                  status: 'ACTIVE',
                  standard: {
                    name: null,
                    externalId: 'fr-cic-ob',
                    url: null,
                    maxNbAccountsPerConsent: 0,
                    maxConsentPeriodAllowedInDays: 0,
                    specifics: null,
                    clientConfig: null,
                  },
                  comments: null,
                  group: null,
                },
                {
                  id: '60a3b97628982178073991e6',
                  nationalId: 'fr-n26-ob',
                  icon: 'https://cdn.tink.se/provider-images/fr/fr-n26.png',
                  name: 'N26',
                  status: 'ACTIVE',
                  standard: {
                    name: null,
                    externalId: 'fr-n26-ob',
                    url: null,
                    maxNbAccountsPerConsent: 0,
                    maxConsentPeriodAllowedInDays: 0,
                    specifics: null,
                    clientConfig: null,
                  },
                  comments: null,
                  group: null,
                },
              ],
            },
            {},
          ),
      },
    }).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
