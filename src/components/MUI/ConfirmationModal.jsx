import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ConfirmationModal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#495E57',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmationModal = ({ open, handleOpen, handleClose}) => {

    
    
    
    return (
        <div>
        
            <input onClick={handleOpen} className='submitButton' type="submit" value={'Reserve'} />
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Confirmation"
                aria-describedby="Popup to to confirm reservation"
            >
                <Box borderRadius={'1rem'} sx={style}>
                <Typography id="confirmation-header" variant="h6" component="h2" color={'#F4CE14'} fontSize={'2rem'} fontWeight={700}>
                    We look forward to serving you!
                </Typography>
                <Typography id="confirmation-text" fontSize={'1.5rem'} sx={{ mt: 2 }}>
                    You will receive a day of reminder text. 
                </Typography>
                </Box>
            </Modal>
        </div>
    )
};

export default ConfirmationModal;
