import React from 'react';
import useStyles from '../styles';

import Button from '@material-ui/core/Button';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const ButtonAscDsc = (props) => {
  const { ascDsc, onClick } = props;
  const classes = useStyles();
  return (
    <Button onClick={onClick} className={classes.btn} fullWidth>
      {ascDsc ? (
        <p>
          ASC <VerticalAlignBottomIcon fontSize='small' />
        </p>
      ) : (
        <p>
          DSC <VerticalAlignTopIcon fontSize='small' />
        </p>
      )}
    </Button>
  );
};

export default ButtonAscDsc;
