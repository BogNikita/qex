import React from 'react';
import { useHistory } from 'react-router';
import './Navigation.css';

export default function Navigation() {
  const history = useHistory();
  const link = [
    { name: 'Главная', link: '/' },
    { name: 'Новости', link: '/news' },
    { name: 'Профиль', link: '/profile' },
  ];

  const handleLink = (target) => {
    history.push(target);
  };

  const linkList = link.map((item) => (
    <li onClick={() => handleLink(item.link)} key={item.name}>
      {item.name}
    </li>
  ));

  return <ul className="navigation">{linkList}</ul>;
}
