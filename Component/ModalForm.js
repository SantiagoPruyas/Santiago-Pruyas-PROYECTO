import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import styles from "../styles/Modal.module.css";

export default function TransitionsModal({ createElement }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  const handleNewName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handleNewSpecies = (e) => {
    console.log(e.target.value)
    setSpecies(e.target.value)
  }


  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Agregar nuevo Rick</Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box>
            <Grid className={styles.container}>
              <Grid className={styles.item}>
                <TextField onChange={handleNewName} id="outlined-basic" label="Nombre del nuevo Rick" variant="outlined" />
              </Grid>
              <Grid className={styles.item}>
                <TextField onChange={handleNewSpecies} id="outlined-basic" label="Especie del Rick" variant="outlined" />
              </Grid>
              <Grid className={styles.item}>
                <Button variant="outlined" color="primary" onClick={() => {
                  createElement(name, species)
                  setOpen(false)
                }}>
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
