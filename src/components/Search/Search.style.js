import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'end',
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '1fr 5fr'
  }
}));

export default useStyles;