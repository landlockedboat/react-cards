import React, { useState, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import AddCardModal from './components/AddCardModal'
import AddCardFab from './components/AddCardFab'
import CardGrid from './components/CardGrid'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {

  const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
    );

    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
  };

  const [cards, setCards] = useStateWithLocalStorage('cards', []);

  const [newCardInfo, setNewCardInfo] = useState({
    id: -1,
    title: "",
    description: "",
    imageUrl: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  function eraseNewCardInfo() {
    setNewCardInfo({
      id: -1,
      title: "",
      description: "",
      imageUrl: ""
    })
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
    eraseNewCardInfo();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateNewCard = () => {
    if (!newCardInfo.title || !newCardInfo.description) {
      return;
    }

    setIsModalOpen(false);

    if (newCardInfo.id <= -1) {
      addCard(newCardInfo);
    }
    else {
      const newCards = cards.map((card) => {
        if (card.id === newCardInfo.id) {
          return newCardInfo;
        } else {
          return card;
        }
      });
      setCards(newCards);
    }
  }

  const handleEraseCard = (id) => {
    // The last .map is done in order to regenerate ids based on indices
    const newCards = cards.filter((card) => { return card.id !== id }).map((card, i) => {
      return {
        id: i,
        title: card.title,
        description: card.description,
        imageUrl: card.imageUrl,
        creationDate: card.creationDate
      }
    }
    );
    setCards(newCards);
  }

  const handleSortCardsByTitle = () => {
    const newCards = [].concat(cards).sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    setCards(newCards);
  }

  const handleSortCardsByCreationDate = () => {
    const newCards = [].concat(cards).sort((a, b) => a.creationDate > b.creationDate ? 1 : -1);
    setCards(newCards);
  }

  const handleEditCard = (id) => {
    setIsModalOpen(true);
    const cardToEdit = cards.find(card => card.id === id);
    setNewCardInfo(cardToEdit);
  }

  const handleEraseAllCards = () => {
    setCards([]);
  }

  function addCard(card) {
    setCards(cards => [...cards, {
      id: cards.length,
      title: card.title,
      description: card.description,
      imageUrl: card.imageUrl.length <= 0 ? "https://source.unsplash.com/WLUHO9A_xik/1600x900" : card.imageUrl,
      creationDate: new Date().getTime(),
    }]);
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
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
                <Button variant="contained" color="primary" onClick={handleSortCardsByTitle}>
                  Ordenar por título
                  </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={handleSortCardsByCreationDate}>
                  Ordenar por fecha de creación
                  </Button>
              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
      {/* End hero unit */}
      <CardGrid cards={cards} handleEditCard={handleEditCard} handleEraseCard={handleEraseCard}></CardGrid>
      <AddCardFab handleClickOpen={handleOpenModal}></AddCardFab>
      <AddCardModal
        isModalOpen={isModalOpen}
        newCardInfo={newCardInfo}
        setNewCardInfo={setNewCardInfo}
        handleCloseModal={handleCloseModal}
        handleCreateNewCard={handleCreateNewCard}>
      </AddCardModal>
      {/* Footer */}
      <footer className={classes.footer}>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleEraseAllCards}>
            Borrar todo
                  </Button>
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;
