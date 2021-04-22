import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { changeUserInfo } from '../store/actions/userProfile';

export default function Profile() {
  const { firstName, lastName, avatar } = useSelector(({ userProfile }) => userProfile);
  const { authorization } = useSelector(({ auth }) => auth);
  const userProfile = useSelector(({ userProfile }) => userProfile);
  const [isEdit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(userProfile);
  const dispatch = useDispatch();

  if (!authorization) {
    return <Redirect to="/auth" />;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEdit(!isEdit);
    if (isEdit) {
      dispatch(changeUserInfo(userInfo));
    }
  };

  const onChangeHandler = (value, target) => {
    setUserInfo({
      ...userInfo,
      [target]: value,
    });
  };

  const labelFromState = Object.keys(userInfo).slice(3);
  const arrayLabels = ['Город', 'Образование', 'Дата рождения', 'Увлечения', 'Прочее'];

  const fieldInfo = arrayLabels.map((item, i) => (
    <div key={`${item}_${i}`} className="profile-content__row">
      {isEdit ? (
        <Input
          type="text"
          onChangeHandler={onChangeHandler}
          text={item}
          name={labelFromState[i]}
          value={userInfo[labelFromState[i]]}
        />
      ) : (
        <>
          <span className="label">{item}:</span>
          <span className="value">{userInfo[labelFromState[i]]}</span>
        </>
      )}
    </div>
  ));

  return (
    <form className="profile" onSubmit={onSubmitHandler}>
      <div className="profile-avatar">
        {isEdit ? (
          <Input
            text="Ссылка на картинку"
            onChangeHandler={onChangeHandler}
            name="avatar"
            value={userInfo.avatar}
            type='url'
          />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <Button type="submit" text={isEdit ? 'Сохранить' : 'Редактировать'} />
      </div>
      <div className="profile-content">
        {isEdit ? (
          <>
            <Input
              text="Имя"
              onChangeHandler={onChangeHandler}
              name="firstName"
              value={userInfo.firstName}
            />
            <Input
              text="Фамилия"
              onChangeHandler={onChangeHandler}
              name="lastName"
              value={userInfo.lastName}
            />
          </>
        ) : (
          <h3>
            {firstName} {lastName}
          </h3>
        )}
        <div className="profile-content__description">{fieldInfo}</div>
      </div>
    </form>
  );
}
