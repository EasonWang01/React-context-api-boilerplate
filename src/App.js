import React, { PureComponent, createContext, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Login from './Container/Login/'
import Register from './Container/Register/'


// Import context store
import store from './Context/Store/'
import actions from './Context/Actions/'

// Initialize a context
const Context = createContext()
const { Provider, Consumer } = Context


// eslint-disable-next-line react/prefer-stateless-function
class App extends PureComponent {
  constructor() {
    super();
    this.state = store
  }

  render() {
    // 綁定 Action 作用域給 App.js 根組件
    for(let f in actions) {
      if(typeof actions[f] === "function"){
        actions[f] = actions[f].bind(this);
      }
    }

    return (
      <Provider value={{
        state: this.state,
        actions
      }}>
        <Router>
          <Fragment>
            <Route path="/login" render={() => <Login Consumer={Consumer} />} />
            <Route path="/register" render={() => <Register Consumer={Consumer} />} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
