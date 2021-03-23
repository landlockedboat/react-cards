import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fabWrapper: {
        display: 'flex',
        position: 'fixed',
        width: '100%',
        justifyContent: 'center',
        bottom: '5vh'
    },
    fab: {
        position: 'absolute',
        bottom: '-2em',
        right: theme.spacing(2),
    }
}));

function AddCardFab(props) {
    const classes = useStyles();

    return (
        <div className={classes.fabWrapper}>
            <div className={classes.fab}>
                <Fab color="primary" aria-label="add" onClick={props.handleClickOpen}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}

export default AddCardFab;