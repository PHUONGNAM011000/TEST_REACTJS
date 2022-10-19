import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Title from 'Components/Title/Title';
import classes from './Tab.module.css';

const Tab = (props) => {
  const { listTab } = props;

  const [idTabActive, setIdTabActive] = useState(0);

  return (
    <div className={classes.tab}>
      <ul className={classes['list-tab']}>
        {_map(listTab, (item, index) => (
          <li onClick={() => setIdTabActive(index)}>
            <Title>{item}</Title>
            <div
              className={classes.line}
              style={{
                visibility: index === idTabActive ? 'inherit' : 'hidden',
              }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
Tab.propsTypes = {
  listTab: PropTypes.array,
};
