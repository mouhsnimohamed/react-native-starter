import AggregatedAccounts from '../AggregatedAccounts';
import React from 'react';
import { render, cleanup } from 'utils/test/render.utils';
import {
  AGGREGATION_REDUCER,
  aggregationReducer,
  initState,
} from 'modules/aggregation/aggregation.reducer';

afterEach(cleanup);

describe('<AggregatedAccounts />', () => {
  it('render AggregatedAccounts empty list', () => {
    const rendered = render(
      <AggregatedAccounts navigation={{ setOptions: jest.fn() }} />,
      {
        reducers: {
          [AGGREGATION_REDUCER]: aggregationReducer,
        },
      },
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('render AggregatedAccounts full list', () => {
    const rendered = render(
      <AggregatedAccounts navigation={{ setOptions: jest.fn() }} />,
      {
        reducers: {
          [AGGREGATION_REDUCER]: () =>
            aggregationReducer(
              {
                ...initState,
                accounts: [
                  {
                    resourceId: '19340cb5825b4a02a0666476694e78f9',
                    name: 'Santander',
                    cashAccountType: 'LOAN',
                    balances: [
                      {
                        creditDebitIndicator: 'DEBIT',
                        type: 'OPENING_BOOKED',
                        amount: {
                          value: -0.49,
                          currency: 'EUR',
                        },
                      },
                    ],
                    references: [
                      {
                        type: 'IBAN',
                        id: '7777-333334444444',
                      },
                    ],
                    currency: 'EUR',
                    ingested: false,
                    lastRefreshDate: '2021-07-05T14:11:40.168582Z',
                    aspsp: {
                      id: '60b8bc549afa7978b064f4a0',
                      name: 'Demo Crédit Agricole',
                      icon: 'www.google.com',
                    },
                  },
                  {
                    resourceId: '53b64deb297b4c0bb628e8feeadabc7a',
                    name: 'Checking Account tink 1',
                    cashAccountType: 'CACC',
                    balances: [
                      {
                        creditDebitIndicator: 'CREDIT',
                        type: 'OPENING_BOOKED',
                        amount: {
                          value: 68.61,
                          currency: 'EUR',
                        },
                      },
                    ],
                    references: [
                      {
                        type: 'IBAN',
                        id: 'FR1420041010050015664355590',
                      },
                    ],
                    currency: 'EUR',
                    ingested: false,
                    lastRefreshDate: '2021-07-05T14:11:40.168632Z',
                    aspsp: {
                      id: '60b8bc549afa7978b064f4a0',
                      name: 'Demo Crédit Agricole',
                      icon: 'www.google.com',
                    },
                  },
                  {
                    resourceId: '57454b41fce9416b8cbfd59677376d67',
                    name: 'Savings Account tink',
                    cashAccountType: 'SVGS',
                    balances: [
                      {
                        creditDebitIndicator: 'CREDIT',
                        type: 'OPENING_BOOKED',
                        amount: {
                          value: 4520.55,
                          currency: 'EUR',
                        },
                      },
                    ],
                    references: [
                      {
                        type: 'IBAN',
                        id: 'FR5620041010050020279279990',
                      },
                    ],
                    currency: 'EUR',
                    ingested: false,
                    lastRefreshDate: '2021-07-05T14:11:40.168679Z',
                    aspsp: {
                      id: '60b8bc549afa7978b064f4a0',
                      name: 'Demo Crédit Agricole',
                      icon: 'www.google.com',
                    },
                  },
                ],
              },
              {},
            ),
        },
      },
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
