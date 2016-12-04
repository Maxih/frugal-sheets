import React from 'react';
import { Provider } from 'react-redux';

// react components
import DocContainer from './doc/doc_container';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <DocContainer />
    </Provider>
  );
};

export default Root;
