import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";


class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
    }
  }
  toRegister() {
    this.props.history.push("/register");
  }

  render() {
    const Consumer = this.props.Consumer;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <div>Login</div>
            <div>{state.user}</div>
            <input onChange={(e) => actions.setUser(e.target.value)} />
            <button onClick={() => this.toRegister()}>toRegister</button>
          </div>
        )}
      </Consumer>
    )
  }
}

export default withRouter(Login);


