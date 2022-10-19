import React from 'react';
import ListWallet from './ListWallet/ListWallet';
import Tab from './Tab/Tab';

const Hero = () => {
  const arrTitleHero = ['My Wallet', 'Report', 'Setting'];
  const arrTitleTransaction = ['Transaction', 'Pending'];

  return (
    <div>
      <Tab listTab={arrTitleHero} />
      <ListWallet />
      <Tab listTab={arrTitleTransaction} />
    </div>
  );
};

export default Hero;
