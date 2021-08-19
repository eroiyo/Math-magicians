import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Screen = class extends Component {
    constructor(props) {
        super(props);
        this.state= props 
      }
    render() {
        return (
            <div className="screen">{this.props.total}</div>
        );
    }
};


Screen.propTypes = {
    result: PropTypes.string,
};

export default Screen;
