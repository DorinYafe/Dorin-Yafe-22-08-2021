import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(( theme ) => ({
  unitWrapper: {
    gridAutoFlow: 'column',
    display: 'grid',
    alignItems: 'baseline',
    gridGap: '1rem'
  },
  cityTitle: {
    padding: '6px 8px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
})
);

export default useStyles;