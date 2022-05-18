import React from 'react';
import { Provider } from 'react-redux';

/** Components Pages */
import AppRouter from './routes/approuter';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={ store } className='app'>
      <AppRouter />
    </Provider>
  );
}