import React from 'react';
import { renderWithThemeProvider, cleanup } from 'utils/test/render.utils';
import BankItem from '../../components/BankItem';
import * as reactRedux from 'react-redux';

afterEach(cleanup);

describe('<BankItem />', () => {
  it('render BankItem correctly', () => {
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    const rendered = renderWithThemeProvider(
      <BankItem
        item={[
          { bankName: 'Credit agricole', iconName: 'iconName' },
          { bankName: 'Revolut', iconName: 'iconName' },
          { bankName: 'Bank of africa', iconName: 'iconName' },
        ]}
      />,
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
