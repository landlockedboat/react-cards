import './App.css';
import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import { useTheme } from '@material-ui/core/styles';

function AddCardModal(props) {

  const handleTitleChange = (event) => {
    props.setCardInfo({
      title: event.target.value,
      description: props.cardInfo.description,
      imageUrl: props.cardInfo.imageUrl
    })
  }

  const handleDescriptionChange = (event) => {
    props.setCardInfo({
      title: props.cardInfo.title,
      description: event.target.value,
      imageUrl: props.cardInfo.imageUrl
    })
  }

  const handleImageUrlChange = (event) => {
    props.setCardInfo({
      title: props.cardInfo.title,
      description: props.cardInfo.description,
      imageUrl: event.target.value
    })
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nueva tarjeta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Crea una nueva tarjeta a través de este modal.
          </DialogContentText>
          <TextField
            error={props.cardInfo.title.length <= 0}
            required
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            type="text"
            value={props.cardInfo.title}
            onChange={handleTitleChange}
            fullWidth
          />
          <TextField
            error={props.cardInfo.description <= 0}
            required
            margin="dense"
            id="description"
            label="Descripción"
            type="text"
            value={props.cardInfo.description}
            onChange={handleDescriptionChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="url"
            label="Imagen (Url)"
            type="text"
            value={props.cardInfo.imageUrl}
            onChange={handleImageUrlChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleNewCard} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function AddCardFab(props) {
  const theme = useTheme();

  return (
    <div className="flexbox">
      <div style={{
        position: 'absolute',
        bottom: theme.spacing(0),
        right: theme.spacing(2),
      }}>
        <Fab color="primary" aria-label="add" onClick={props.handleClickOpen}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
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

function CardGrid(params) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {params.cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <MyCard card={card}></MyCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function App() {
  const [cards, setCards] = useState([]);

  const [cardInfo, setCardInfo] = useState({
    title: "",
    description: "",
    imageUrl: ""
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setCardInfo({
      title: "",
      description: "",
      imageUrl: ""
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewCard = () => {
    if (cardInfo.title && cardInfo.description) {
      setOpen(false);
      addCard(cardInfo);
    }
  }

  function addCard(card) {
    setCards(cards => [...cards, {
      id: cards.length,
      title: card.title,
      description: card.description,
      imageUrl: card.imageUrl.length <= 0 ? "https://source.unsplash.com/WLUHO9A_xik/1600x900": card.imageUrl
    }]);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <CardGrid cards={cards}></CardGrid>
      <AddCardFab handleClickOpen={handleClickOpen}></AddCardFab>
      <AddCardModal open={open} cardInfo={cardInfo} setCardInfo={setCardInfo} handleClose={handleClose} handleNewCard={handleNewCard}>
      </AddCardModal>
    </React.Fragment>
  );
}

export default App;
