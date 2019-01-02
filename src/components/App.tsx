import * as React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import './App.css';

class App extends React.Component<any> {
  public render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
      </Provider>
    );
  }
}
// const withStore = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

export default App;
