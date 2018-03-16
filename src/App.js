// @flow

import React, { Component, Fragment } from 'react';


class BaseComponent<P, S = void> extends Component<P, S> {
  name: string;
  componentDidMount() {
    console.log(this.name);
  }
}

type FirstProps = {|
  foo: number;
|}

type SecondProps = {|
  foo: number;
|}

type SecondState = {|
  bar: string;
|}

class First extends BaseComponent<FirstProps> {
  name = 'App'
  render() {
    return (
      <Fragment>
        {this.props.foo}

        {// $ExpectError
          this.state.bar
        }
      </Fragment>
    );
  }
}

class Second extends BaseComponent<SecondProps, SecondState> {
  render() {
    return (
      <Fragment>
        {this.props.foo}

        {// $ExpectError
          this.props.bar
        }

        {this.state.bar}
      </Fragment>
    ); 
  }
}
