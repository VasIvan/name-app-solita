import React from 'react';
import useStyles from '../styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const OrderTabs = (props) => {
  const { value, handleTabs } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.btn} position='static'>
        <Tabs value={value} onChange={handleTabs} centered>
          <Tab label='by date' />
          <Tab label='alphabetical' />
          <Tab label='by amount' />
        </Tabs>
      </AppBar>
    </>
  );
};

export default OrderTabs;
