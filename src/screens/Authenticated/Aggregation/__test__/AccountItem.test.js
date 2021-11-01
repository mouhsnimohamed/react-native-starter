import AccountItem from '../components/AccountItem';
import React from 'react';
import { renderWithThemeProvider, cleanup } from 'utils/test/render.utils';

afterEach(cleanup);

describe('<AccountItem />', () => {
  it('render AccountItem with positive amount', () => {
    const rendered = renderWithThemeProvider(
      <AccountItem
        item={{
          resourceId: '2f0a2ac715b84baba13f80209c0d3cac',
          name: 'Santander',
          cashAccountType: 'LOAN',
          balances: [
            {
              creditDebitIndicator: 'CREDIT',
              type: 'OPENING_BOOKED',
              amount: {
                value: 99.49,
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
          lastRefreshDate: '2021-06-28T09:59:28.460568Z',
          aspsp: {
            id: '60b8bc549afa7978b064f4a0',
            name: 'Demo Crédit Agricole',
            icon: 'https://reactjs.org/logo-og.png',
          },
        }}
      />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('render AccountItem with negative amount', () => {
    const rendered = renderWithThemeProvider(
      <AccountItem
        item={{
          resourceId: '2f0a2ac715b84baba13f80209c0d3cac',
          name: 'Santander',
          cashAccountType: 'LOAN',
          balances: [
            {
              creditDebitIndicator: 'DEBIT',
              type: 'OPENING_BOOKED',
              amount: {
                value: -99.49,
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
          lastRefreshDate: '2021-06-28T09:59:28.460568Z',
          aspsp: {
            id: '60b8bc549afa7978b064f4a0',
            name: 'Demo Crédit Agricole',
            icon: 'https://reactjs.org/logo-og.png',
          },
        }}
      />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
