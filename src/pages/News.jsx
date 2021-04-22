import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import NewsItem from '../components/NewsItem/NewsItem';
import { addNews } from '../store/actions/news';

export default function News() {
  const [newNews, setNewNews] = useState({
    content: '',
    img: '',
  });

  const news = useSelector(({ news }) => news);
  const { firstName, avatar } = useSelector(({ userProfile }) => userProfile);
  const { authorization } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const addNew = (e) => {
    e.preventDefault();
    dispatch(addNews({ author: firstName, avatar, content: newNews.content, img: newNews.img }));
    setNewNews({
      content: '',
      img: '',
    });
  };

  const onChangeHandler = (value, target) => {
    setNewNews({
      ...newNews,
      [target]: value,
    });
  };

  const newsElements = news.map((item, i) => (
    <NewsItem
      key={`${item.author}_${i}`}
      author={item.author}
      avatar={item.avatar}
      content={item.content}
      img={item.img}
    />
  ));

  return (
    <>
      {authorization ? (
        <form className="add-news" onSubmit={(e) => addNew(e)}>
          <Input
            onChangeHandler={onChangeHandler}
            name="content"
            type="text"
            text="Текст новости"
            value={newNews.content}
          />
          <Input
            name="img"
            type="url"
            onChangeHandler={onChangeHandler}
            text="ссылка на изображение"
          />
          <Button text="добавить новость" type="submit" />
        </form>
      ) : null}
      {newsElements}
    </>
  );
}
