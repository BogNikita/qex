import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import NewsItem from '../components/NewsItem/NewsItem';
import { addNews } from '../store/actions/news';

export default function News() {
  const [newNewsContent, setNewNewsContent] = useState('');
  const [newNewsImg, setNewNewsImg] = useState('');

  const news = useSelector(({ news }) => news);
  const { firstName, avatar } = useSelector(({ userProfile }) => userProfile);
  const { authorization } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const addNew = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addNews({ author: firstName, avatar, content: newNewsContent, img: newNewsImg }));
      setNewNewsContent('');
      setNewNewsImg('');
    },
    [firstName, avatar, dispatch, newNewsContent, newNewsImg],
  );

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
            onChangeHandler={setNewNewsContent}
            name="content"
            type="text"
            text="Текст новости"
            value={newNewsContent}
          />
          <Input
            name="img"
            type="url"
            onChangeHandler={setNewNewsImg}
            text="ссылка на изображение"
            value={newNewsImg}
          />
          <Button text="добавить новость" type="submit" />
        </form>
      ) : null}
      {newsElements}
    </>
  );
}
