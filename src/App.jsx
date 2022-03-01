
import React from "react";
import { hot } from 'react-hot-loader/root';
// eslint-disable-next-line no-undef


class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello {name}
        </h1>
        <a class="btn btn-blue" type='button' href="/api/auth" >
          Login with Github
        </a>
      </>
    );
  }
}

export default hot(App);
