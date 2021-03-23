import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import MyCard from './MyCard'


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

function CardGrid(params) {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {params.cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <MyCard card={card} handleEditCard={params.handleEditCard} handleEraseCard={params.handleEraseCard}></MyCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CardGrid;