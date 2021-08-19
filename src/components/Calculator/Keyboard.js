import React, { PureComponent } from 'react';

const Keyboard = class extends PureComponent {
  render() {
    return (
        <div className="options">
          <button className="option blue" type="button" value="AC"><span>AC</span></button>
          <button className="option blue" type="button" value="+/-"><span>+/-</span></button>
          <button className="option blue" type="button" value="%"><span>%</span></button>
          <button className="option blue" type="button" value="/"><span>/</span></button>

          <button type="button" className="option" value="7"><span>7</span></button>
          <button type="button" className="option" value="8"><span>8</span></button>
          <button type="button" className="option" value="9"><span>9</span></button>
          <button type="button" className="option blue" value="X"><span>X</span></button>

          <button type="button" className="option" value="4"><span>4</span></button>
          <button type="button" className="option" value="5"><span>5</span></button>
          <button type="button" className="option" value="6"><span>6</span></button>
          <button type="button" className="option blue" value="-"><span>-</span></button>

          <button type="button" className="option" value="1"><span>1</span></button>
          <button type="button" className="option" value="2"><span>2</span></button>
          <button type="button" className="option" value="3"><span>3</span></button>
          <button type="button" className="option blue" value="+"><span>+</span></button>

          <button className="option zero" type="button" value="0"><span>0</span></button>
          <button className="option" type="button" value="."><span>.</span></button>
          <button className="option blue" type="button" value="="><span>=</span></button>
        </div>
    );
  }
};

Keyboard.displayName = 'Keyboard';

export default Keyboard;