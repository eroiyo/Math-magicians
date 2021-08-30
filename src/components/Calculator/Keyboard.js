const Keyboard = (props) => {
  const { onClick } = props;
  return (
    <div className="options">
      <button data-testid="AC" className="option blue" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="AC"><span>AC</span></button>
      <button data-testid="+/-" className="option blue" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="+/-"><span>+/-</span></button>
      <button data-testid="%" className="option blue" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="%"><span>%</span></button>
      <button data-testid="÷" className="option blue" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="÷"><span>÷</span></button>

      <button data-testid="7" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="7"><span>7</span></button>
      <button data-testid="8" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="8"><span>8</span></button>
      <button data-testid="9" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="9"><span>9</span></button>
      <button data-testid="x" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option blue" value="x"><span>x</span></button>

      <button data-testid="4" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="4"><span>4</span></button>
      <button data-testid="5" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="5"><span>5</span></button>
      <button data-testid="6" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="6"><span>6</span></button>
      <button data-testid="-" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option blue" value="-"><span>-</span></button>

      <button data-testid="1" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="1"><span>1</span></button>
      <button data-testid="2" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="2"><span>2</span></button>
      <button data-testid="3" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option" value="3"><span>3</span></button>
      <button data-testid="+" onClick={(e) => onClick(e.currentTarget.value)} type="button" className="option blue" value="+"><span>+</span></button>

      <button data-testid="0" className="option zero" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="0"><span>0</span></button>
      <button data-testid="." className="option" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="."><span>.</span></button>
      <button data-testid="=" className="option blue" onClick={(e) => onClick(e.currentTarget.value)} type="button" value="="><span>=</span></button>
    </div>
  );
};

Keyboard.displayName = 'Keyboard';

export default Keyboard;
