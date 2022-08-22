import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import styles from '../styles/Login.module.css'

const Login = () => {
    return (
        <div className={styles.login}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                component="form"
                sx={{
                    maxWidth: '400px',
                    height: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    border: '1px solid gray',
                    borderRadius: '5px',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        textAlign: 'center',
                    }}
                >
                    INICIAR SESION
                </Typography>
                <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                <Stack spacing={1} direction="column">
                    <Button variant="contained">Iniciar Sesión</Button>
                </Stack>
                <Stack spacing={1} direction="row">
                    <p> O desea iniciar sesion con: </p>
                    <IconButton aria-label="delete">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                </Stack>


            </Box>
        </div>
    )
}

export default Login
