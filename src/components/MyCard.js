import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));

function MyCard(params) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={params.card.imageUrl}
                title={params.card.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {params.card.title}
                </Typography>
                <Typography>
                    {params.card.description}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default MyCard;