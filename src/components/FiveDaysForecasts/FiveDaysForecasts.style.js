import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: '3rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(9rem, 1fr))',
    margin:  '5rem'
  }
}));

export default useStyles;