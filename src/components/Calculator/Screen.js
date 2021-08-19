import React, { Component } from 'react'

const Screen = class extends Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    return (
          <div className="screen">{this.props.total}</div>
    );
  }
};

export default Screen;
