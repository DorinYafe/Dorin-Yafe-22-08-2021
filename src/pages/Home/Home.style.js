import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(( theme ) => ({
  searchBar: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '45%'       
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '40%'       
    }
  }
}));

export default useStyles;