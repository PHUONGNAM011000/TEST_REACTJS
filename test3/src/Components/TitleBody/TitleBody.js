import React from 'react';
import classes from './TitleBody.module.css';

const TitleBody = (props) => {
  return <div className={classes.title}>{props.children}</div>;
};

export default TitleBody;
