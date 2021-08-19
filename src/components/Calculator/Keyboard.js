import React, { Component } from 'react';

const Keyboard = class extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = props.onButtonClick;
  }

  render() {
    return (
      <div className="options">
        <button className="option blue" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="AC"><span>AC</span></button>
        <button className="option blue" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="+/-"><span>+/-</span></button>
        <button className="option blue" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="%"><span>%</span></button>
        <button className="option blue" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="÷"><span>÷</span></button>

        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="7"><span>7</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="8"><span>8</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="9"><span>9</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option blue" value="x"><span>x</span></button>

        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="4"><span>4</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="5"><span>5</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="6"><span>6</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option blue" value="-"><span>-</span></button>

        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="1"><span>1</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="2"><span>2</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option" value="3"><span>3</span></button>
        <button onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" className="option blue" value="+"><span>+</span></button>

        <button className="option zero" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="0"><span>0</span></button>
        <button className="option" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="."><span>.</span></button>
        <button className="option blue" onClick={(e) => this.onButtonClick(e.currentTarget.value)} type="button" value="="><span>=</span></button>
      </div>
    );
  }
};

Keyboard.displayName = 'Keyboard';

export default Keyboard;
