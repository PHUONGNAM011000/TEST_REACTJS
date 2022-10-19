import React from 'react';
import WalletItem from './WalletItem/WalletItem';
import classes from './ListWallet.module.css';

const ListWallet = () => {
  return (
    <ul className={classes['list-wallet']}>
      <li>
        <WalletItem background="#0084F4"></WalletItem>
      </li>
      <li>
        <WalletItem background="#FC9D00"></WalletItem>
      </li>
      <li>
        <WalletItem background="#04B800"></WalletItem>
      </li>
    </ul>
  );
};

export default ListWallet;
