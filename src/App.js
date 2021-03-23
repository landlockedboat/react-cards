import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AddCardModal from './components/AddCardModal'
import AddCardFab from './components/AddCardFab'
import CardGrid from './components/CardGrid'

function App() {
  const [cards, setCards] = useState([]);
  const [newCardInfo, setNewCardInfo] = useState({
    title: "",
    description: "",
    imageUrl: ""
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function eraseNewCardInfo() {
    setNewCardInfo({
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
    if (newCardInfo.title && newCardInfo.description) {
      setIsModalOpen(false);
      addCard(newCardInfo);
    }
  }

  function addCard(card) {
    setCards(cards => [...cards, {
      id: cards.length,
      title: card.title,
      description: card.description,
      imageUrl: card.imageUrl.length <= 0 ? "https://source.unsplash.com/WLUHO9A_xik/1600x900" : card.imageUrl
    }]);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <CardGrid cards={cards}></CardGrid>
      <AddCardFab handleClickOpen={handleOpenModal}></AddCardFab>
      <AddCardModal
        isModalOpen={isModalOpen}
        newCardInfo={newCardInfo}
        setNewCardInfo={setNewCardInfo}
        handleCloseModal={handleCloseModal}
        handleCreateNewCard={handleCreateNewCard}>
      </AddCardModal>
    </React.Fragment>
  );
}

export default App;
