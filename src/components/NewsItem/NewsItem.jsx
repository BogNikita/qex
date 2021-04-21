import React from 'react';
import './NewsItem.css';

export default function NewsItem({ author, avatar, content, img }) {
  return (
    <div className="news-item">
      <div className="news-item__header">
        <img src={avatar} alt="user avater" />
        <span>{author}</span>
      </div>
      <div className="news-item__content">
        <p>{content}</p>
        {img ? <img src={img} alt="content img" /> : null}
      </div>
    </div>
  );
}
