import React, { useState } from 'react';
import useStyles from './styles';

import Grid from '@material-ui/core/Grid';

import OrderTabs from './components/OrderTabs';
import NameContainer from './components/NameContainer';
import AddNameForm from './components/AddNameForm';

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [addRefresh, setAddrefresh] = useState(false);

  const handleAddRefresh = () => {
    setAddrefresh(!addRefresh);
  };

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <OrderTabs handleTabs={handleTabs} value={value} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <AddNameForm handleAddRefresh={handleAddRefresh} />
        </Grid>
        <NameContainer addRefresh={addRefresh} value={value} />
      </Grid>
    </div>
  );
};

export default App;
