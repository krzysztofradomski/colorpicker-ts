import * as React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import Main from './main/Main';

import './App.css';

class App extends React.Component<any> {
  public render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
