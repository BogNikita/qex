import React from 'react';
import './Speedometr.css';

export default React.memo(function Speedometr({ count }) {
  const angle = count > 17 ? 175 : count * 10;

  return (
    <div className="speedometr">
      <span className="count">{count}</span>

      <div className="row">
        <i>8</i>
        <i>10</i>
      </div>
      <div className="row">
        <i>6</i>
        <i>12</i>
      </div>
      <div className="row">
        <i>4</i>
        <i>14</i>
      </div>
      <div className="row">
        <i>2</i>
        <i>16</i>
      </div>
      <div className="row">
        <i>0</i>
        <i>&#8734;</i>
      </div>
      <span className="arrow" style={{ transform: `rotate(${angle}deg)` }}></span>
    </div>
  );
});
