import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nomes do Brasil
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Header;
