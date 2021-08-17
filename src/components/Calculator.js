import React from 'react';
import './App.css';

class Calculator extends React.Component {
  render(){
  return (
    <div class="calculator">
      <div class="screen">0</div>
      <div class="options">
        <button class="option blue" type="button" value ="AC"><span>AC</span></button>
        <button class="option blue" type="button" value ="+/-"><span>+/-</span></button>
        <button class="option blue" type="button" value ="%"><span>%</span></button>
        <button class="option blue" type="button" value ="/"><span>/</span></button>

        <button type="button" div class="option" value ="7"><span>7</span></button>
        <button type="button" div class="option" value ="8"><span>8</span></button>
        <button type="button" div class="option" value ="9"><span>9</span></button>
        <button class="option blue" type="button" value ="X"><span>X</span></button>

        <button type="button" div class="option" value ="4"><span>4</span></button>
        <button type="button" div class="option" value ="5"><span>5</span></button>
        <button type="button" div class="option" value ="6"><span>6</span></button>
        <button class="option blue" type="button" value ="-"><span>-</span></button>

        <button type="button" div class="option" value ="1"><span>1</span></button>
        <button type="button" div class="option" value ="2"><span>2</span></button>
        <button type="button" div class="option" value ="3"><span>3</span></button>
        <button class="option blue" type="button" value ="+"><span>+</span></button>

        <button class="option zero" type="button" value ="0"><span>0</span></button>
        <button class="option " type="button" value ="."><span>.</span></button>
        <button class="option blue" type="button" value ="="><span>=</span></button>
      </div>
      </div>
  );
  }
}

export default Calculator;
