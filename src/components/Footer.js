import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        // This is done in order to expand the footer all the way down in an easy way.
        boxShadow: '0 50vh 0 50vh ' + theme.palette.background.paper
    }
}));

function Footer(params) {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={params.handleEraseAllCards}>
                    Borrar todo
                </Button>
            </Grid>
        </footer>
    );
}

export default Footer;