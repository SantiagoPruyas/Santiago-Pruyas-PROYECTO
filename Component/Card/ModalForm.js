import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {  Grid  } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}; 



export default function TransitionsModal({createElement}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  
  const handleNewName = (e) => {
    console.log (e.target.value)
    setName(e.target.value)
  }
  const handleNewSpecies = (e) => {
    console.log (e.target.value)
    setSpecies(e.target.value)
  }
  
  
  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Agregar nuevo Rick</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container>
              <Grid item md={12}>
                  <TextField onChange={handleNewName} id="outlined-basic" label="Nombre del nuevo Rick" variant="outlined" />
              </Grid>
              <Grid item md={12}>
                  <TextField onChange={handleNewSpecies} id="outlined-basic" label="Especie del Rick" variant="outlined" />
              </Grid>
              <Grid item md={12}>
              <Button variant="outlined" color="primary" onClick={() => createElement(name, species)}>
                Crear bebe rick
              </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
