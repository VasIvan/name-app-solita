import React from 'react';
import useStyles from '../styles';

import Button from '@material-ui/core/Button';

const Pagination = (props) => {
  const { cardsPerPage, totalCards, paginate } = props;
  const cardNumbers = [];
  const classes = useStyles();

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    cardNumbers.push(i);
  }
  return (
    <>
      {cardNumbers.map((number) => (
        <Button
          key={number}
          className={classes.pagination}
          variant='contained'
          color='primary'
          onClick={() => paginate(number)}>
          {number}
        </Button>
      ))}
    </>
  );
};

export default Pagination;
