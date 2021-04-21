import React from 'react';
import './Button.css';

export default function Button({ type, text, options, onHandleClick }) {
  const classes = ['btn'];

  if (options) {
    classes.push(options);
  }

  return (
    <button className={classes.join(' ')} type={type} onClick={onHandleClick}>
      {text}
    </button>
  );
}
