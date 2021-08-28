import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

function Loader() {
  const [open, setOpen] = React.useState(true);

  const { backdrop } = useStyles();
  return (
    <Backdrop 
      className={backdrop} 
      open={open} 
      onClick={() => setOpen(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
