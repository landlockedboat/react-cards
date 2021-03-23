import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

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

    const [isHovering, setIsHovering] = useState(false);

    return (
        <Card
            className={classes.card}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
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
            <CardActions>
                <Zoom in={isHovering} >
                    <Button size="small" color="primary" onClick={() => params.handleEditCard(params.card.id)}>
                        Editar
                    </Button>
                </Zoom>
                <Zoom in={isHovering} >
                    <Button size="small" color="primary" onClick={() => params.handleEraseCard(params.card.id)}>
                        Borrar
                    </Button>
                </Zoom>
            </CardActions>
        </Card>

    );
}

export default MyCard;