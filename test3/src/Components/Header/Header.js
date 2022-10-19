import React from 'react';
import avatar from '../../assets/image1.png';
import IconVector1 from '../../assets/Vector.png';
import IconVector2 from '../../assets/Vector2.png';
import IconBell from '../../assets/bell.png';
import classes from './Header.module.css';
import Title from '../Title/Title';
import TitleBody from '../TitleBody/TitleBody';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes['info-user']}>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <Title>Minh Nguyen</Title>
          <TitleBody>@Meta</TitleBody>
        </div>
      </div>
      <div className={classes['list-icon']}>
        <div className={classes.icon}>
          <img src={IconVector1} alt="avatar" />
        </div>
        <div className={classes.icon}>
          <img src={IconVector2} alt="avatar" />
        </div>
        <div className={classes.icon}>
          <img src={IconBell} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
