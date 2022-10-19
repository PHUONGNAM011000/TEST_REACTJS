import React from 'react';
import TitleBody from 'Components/TitleBody/TitleBody';
import classes from './WalletItem.module.css';
import Title from 'Components/Title/Title';

const WalletItem = (props) => {
  return (
    <div className={classes.wallet}>
      <div
        className={classes.circle}
        style={{ background: props.background }}
      ></div>
      <div>
        <TitleBody>@Meta Wallet</TitleBody>
        <Title>90,500 MCOIN</Title>
      </div>
    </div>
  );
};

export default WalletItem;
