import React from 'react';
import './Input.css';

export default function Input({ name, text, type, onChangeHandler, value }) {
  return (
    <div className="input">
      <label>{text}:</label>
      <input
        name={name}
        onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
        type={type}
        value={value}
      />
    </div>
  );
}
