import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider, Drawer, List, ListItem, useMediaQuery } from '@material-ui/core';
import { equals, pipe, subtract, length, __ } from 'ramda';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  drawer: {
    backgroundColor: 'darkblue',
    fontSize: '22px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navigation = () => {

  const history = useHistory();
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 450px)');

  const [ open, setOpen ] = React.useState(false);


  const navigationButtons = [
    <Button 
      key='nav-btn-1'
      color="inherit" 
      onClick={() => {
        history.push('/');
        setOpen(false);
      }}
    >
      <Typography>Home</Typography>
    </Button>,
    <Button 
      key='nav-btn-2'
      color="inherit" 
      onClick={() => {
        history.push('/favorites');
        setOpen(false);
      }}
    >
      <Typography>Favorites</Typography>
    </Button>
  ];

  const ListWrapper = ({ list }) => {
    const isEndOfArry = (index) => pipe(length, subtract(__,1), equals(index));

    return (
      <List style={{ background: '#3f51b5'}}>
        {
          list.map(( component, index ) => (
            <>
              <ListItem key={`${component}${index}`}>
                { component }
              </ListItem>
              { !isEndOfArry(index)(list) && (
                <Divider />
              ) }
            </>
          ))
        }
      </List>
    );
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {
              isMobile && (
                <>
                  <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => setOpen(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer 
                    anchor='top'
                    variant="temporary" 
                    open={open} 
                    onClick={() => setOpen(false)} 
                  >
                    <ListWrapper list={navigationButtons} />
                  </Drawer>
                </>
              )
            }
            <Typography 
              variant="h6" 
              className={classes.title}
            >
            Herolo Weather Task
            </Typography>
            { !isMobile && navigationButtons  }
          </Toolbar>
        </AppBar>
      </div> 
    </>
  );
};

export default Navigation;