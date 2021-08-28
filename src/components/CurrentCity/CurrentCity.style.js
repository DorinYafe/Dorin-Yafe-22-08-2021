import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(( theme ) => ({
  chosenCity: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  container: {
    margin: '2rem'
  },
  title: {
    textAlign: 'center'
  },
  addToFavorites: {
    display: 'flex',
    alignItems: 'center'
  },
  unitWrapper: {
    gridAutoFlow: 'column',
    display: 'grid',
    alignItems: 'baseline',
    gridGap: '1rem'
  }
})
);

export default useStyles;