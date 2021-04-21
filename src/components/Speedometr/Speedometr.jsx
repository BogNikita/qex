import React from 'react';
import './Speedometr.css';

export default function Speedometr({ count }) {
  const angle = count > 17 ? 175 : count * 10;

  return (
    <div className="speedometr">
      <span className="count">{count}</span>
      <strong>0</strong>
      <strong>2</strong>
      <strong>4</strong>
      <strong>6</strong>
      <strong>8</strong>
      <strong>10</strong>
      <strong>12</strong>
      <strong>14</strong>
      <strong>16</strong>
      <strong>&#8734;</strong>
      <span className="arrow" style={{ transform: `rotate(${angle}deg)` }}></span>
    </div>
  );
}
