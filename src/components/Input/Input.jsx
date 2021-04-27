import React, { useCallback } from 'react';
import './Input.css';

export default React.memo(function Input({ name, text, type, onChangeHandler, value }) {
  const onChange = useCallback((e) => onChangeHandler(e.target.value, e.target.name), [
    onChangeHandler,
  ]);
  return (
    <div className="input">
      <label>{text}:</label>
      <input name={name} onChange={onChange} type={type} value={value} />
    </div>
  );
});
