import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

function Hero(params) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Test React Zurich
    </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Entregable para el test de react de Zurich.
    </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={params.handleSortCardsByTitle}>
                Ordenar por título
                {params.isSortingByTitleAscending ? <ArrowUpwardIcon></ArrowUpwardIcon> : <ArrowDownwardIcon></ArrowDownwardIcon>}
          </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={params.handleSortCardsByCreationDate}>
                Ordenar por fecha de creación
                {params.isSortingByCreationDateAscending ? <ArrowUpwardIcon></ArrowUpwardIcon> : <ArrowDownwardIcon></ArrowDownwardIcon>}
          </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Hero;