import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';

let store = createStore(allReducers, applyMiddleware(thunk));

test('Shows Star Wars Characters header', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    const starWarsHeader = getByText(/Star Wars Characters/i);
    expect(starWarsHeader).toBeInTheDocument();
});
