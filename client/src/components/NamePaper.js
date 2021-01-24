import React from 'react';
import useStyles from '../styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from 'axios';

const NamePaper = (props) => {
  const { children, amount, id, handleDeleteRefresh } = props;
  const classes = useStyles();
  const firstLetter = children.charAt(0);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/names/${id}`);
      handleDeleteRefresh();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justify='center' alignItems='center'>
          <Grid item xs={2}>
            <Avatar className={classes.avatar}>{firstLetter}</Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: '25px',
                fontWeight: 500,
              }}>
              {amount > 1 ? (
                <GroupIcon fontSize='large' />
              ) : (
                <PersonIcon fontSize='large' />
              )}
              {children}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: '25px',
                fontWeight: 500,
              }}>
              <InsertChartIcon fontSize='large' /> {amount}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton color='secondary' onClick={() => handleDelete(id)}>
              <DeleteIcon fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NamePaper;
