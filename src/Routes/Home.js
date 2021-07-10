import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    // console.log("constructure");
  }

  state = {
    count: 0,
    loading: true,
  };

  add = () => {
    this.setState((current) => ({ count: (current.count += 1) }));
  };

  minus = () => {
    this.setState({ count: (this.state.count -= 1) });
  };

  componentDidMount() {}

  componentDidUpdate() {
    // console.log("dig update");
  }

  componentWillUnmount() {
    // console.log("unmount");
  }
  render() {
    // console.log("render");
    const { loading } = this.state;
    return (
      <div>
        <div>{loading ? "hi" : "bye"}</div>
      </div>
    );
  }
}

export default Home;
