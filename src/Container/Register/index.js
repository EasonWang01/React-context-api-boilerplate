import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";

class Register extends PureComponent {
  constructor() {
    super();
    this.state = {
    }
  }
  toLogin() {
    this.props.history.push("/login");
  }

  render() {
    const Consumer = this.props.Consumer;
    return (
      <Consumer>
        {({ state, actions }) => (
          <div>
            <div>Register</div>
            <div>{state.user}</div>
            <button onClick={() => this.toLogin()}>toLogin</button>
          </div>
        )}
      </Consumer>
    )
  }
}

export default withRouter(Register);


