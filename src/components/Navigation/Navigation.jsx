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
import useStyles from './Navigation.style';

const Navigation = () => {

  const history = useHistory();
  const { root , menuButton, title } = useStyles();
  const isMobile = useMediaQuery('(max-width: 450px)');

  const [ open, setOpen ] = React.useState(false);

  const buttonsConfig = [{ title: 'Home', path: '/'}, {title: 'Favorites', path: '/favorites'}];

  const navigationButtons = buttonsConfig.map(({ title, path }) => (
    <Button 
      key={`btn-${title}`}
      color="inherit" 
      onClick={() => {
        history.push(path);
        setOpen(false);
      }}
    >
      <Typography>{title}</Typography>
    </Button>
  ));


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
      <div className={root}>
        <AppBar position="static">
          <Toolbar>
            {
              isMobile && (
                <>
                  <IconButton 
                    edge="start" 
                    className={menuButton} 
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
              className={title}
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