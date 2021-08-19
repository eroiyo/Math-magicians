import React, { Component } from 'react';

const Screen = class extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const theprops = this.props;
    return (
      <div className="screen">{theprops.total}</div>
    );
  }
};

Screen.displayName = 'Screen';

export default Screen;
