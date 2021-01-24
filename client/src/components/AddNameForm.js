import React from 'react';
import useStyles from '../styles';

import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import axios from 'axios';

const AddNameForm = ({ handleAddRefresh }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    try {
      const response = await axios.post('http://localhost:5000/names', data);
      console.log(response);
      handleAddRefresh();
      e.target.reset();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            variant='outlined'
            label='Name'
            fullWidth
            name='name'
            inputRef={register({
              required: 'Name is required!',
              maxLength: {
                value: 8,
                message: 'Name should be 8 or less letters!',
              },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant='outlined'
            label='Amount'
            fullWidth
            name='amount'
            inputRef={register({
              required: 'Amount is required!',
              max: { value: 99999, message: 'No more than 99999!' },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button type='submit' className={classes.btn} fullWidth>
            Submit
          </Button>
        </Grid>
        {errors.name && (
          <Grid item xs={12}>
            <Alert severity='error'>{errors.name.message}</Alert>
          </Grid>
        )}
        {errors.amount && (
          <Grid item xs={12}>
            <Alert severity='error'>{errors.amount.message}</Alert>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default AddNameForm;
