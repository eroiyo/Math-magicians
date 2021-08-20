import React, { useState, useEffect } from 'react';

const Screen = (props) => {
  const [state, changeState] = useState(props);

  useEffect(() => {
    changeState(props);
  }, [props]);
  return (
    <div className="screen">{state.total}</div>
  );
};

Screen.displayName = 'Screen';

Screen.defaultProps = {
  total: '0',

};

export default Screen;
