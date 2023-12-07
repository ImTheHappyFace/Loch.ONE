import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useCountdown } from 'react-countdown-circle-timer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalFinal({open}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })



  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>Redirecting you to Loch.one in..</h1>
        <CountdownCircleTimer
    isPlaying
    duration={4}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[4, 3, 2, 0]}
  >
    {({ remainingTime }) =>  remainingTime}
  </CountdownCircleTimer>
            </div>
        </Box>

      </Modal>
    </div>
  );
}
