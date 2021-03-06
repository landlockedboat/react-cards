import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddCardModal(props) {

    const handleTitleChange = (event) => {
        props.setNewCardInfo({
            id: props.newCardInfo.id,
            title: event.target.value,
            description: props.newCardInfo.description,
            imageUrl: props.newCardInfo.imageUrl,
            creationDate: props.newCardInfo.creationDate
        })
    }

    const handleDescriptionChange = (event) => {
        props.setNewCardInfo({
            id: props.newCardInfo.id,
            title: props.newCardInfo.title,
            description: event.target.value,
            imageUrl: props.newCardInfo.imageUrl,
            creationDate: props.newCardInfo.creationDate
        })
    }

    const handleImageUrlChange = (event) => {
        props.setNewCardInfo({
            id: props.newCardInfo.id,
            title: props.newCardInfo.title,
            description: props.newCardInfo.description,
            imageUrl: event.target.value,
            creationDate: props.newCardInfo.creationDate
        })
    }

    const isAddingNewCard = props.newCardInfo.id <= -1;

    return (
        <div>
            <Dialog open={props.isModalOpen} onClose={props.handleCloseModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {isAddingNewCard ? 'Nueva tarjeta' : 'Editar tarjeta'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {isAddingNewCard ? 'Crea una nueva tarjeta a través de este modal.' :
                            'Edita la información de una tarjeta existente.'}
                    </DialogContentText>
                    <TextField
                        error={props.newCardInfo.title.length <= 0}
                        required
                        autoFocus
                        margin="dense"
                        id="modal-input-card-title"
                        label="Título"
                        type="text"
                        value={props.newCardInfo.title}
                        onChange={handleTitleChange}
                        fullWidth
                    />
                    <TextField
                        error={props.newCardInfo.description <= 0}
                        required
                        margin="dense"
                        id="modal-input-card-description"
                        label="Descripción"
                        type="text"
                        value={props.newCardInfo.description}
                        onChange={handleDescriptionChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="modal-input-card-url"
                        label="Imagen (Url)"
                        type="text"
                        value={props.newCardInfo.imageUrl}
                        onChange={handleImageUrlChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCreateNewCard} color="primary" id="create-new-card-button">
                        {isAddingNewCard ? 'Añadir' : 'Hecho'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCardModal;