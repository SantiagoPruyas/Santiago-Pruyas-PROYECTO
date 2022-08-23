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
import { useState } from 'react'
import Link from 'next/link'

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
    })
    const [errPass, setErrPass] = useState (false)
    const [err, SetErr] = useState ("")

    function handleChange(e) {
        setUser({ ...user, [e.target.value]: e.target.value })
    }

    function handleSubmit(e) { }

    function handleRegWithGoogle() { }

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
                    height: '500px',
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
                    REGISTRARSE
                </Typography>
                <TextField
                    sx={{ margin: 3 }}
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    required
                    variant="outlined"
                    onChange={handleChange} />
                <TextField
                    sx={{ margin: 3 }}
                    type="password"
                    name="password"
                    required
                    id="Contraseña"
                    label="Contraseña"
                    variant="outlined"
                    onChange={handleChange} />
                <TextField
                    sx={{ margin: 3 }}
                    type="password"
                    name="passwordConfirm"
                    required
                    id="ConfirmPassword"
                    label="Confirmar Contraseña"
                    variant="outlined"
                    onChange={handleChange} />
                {errPass ? "Las contraseñas deben coincidir": ""}
                <Stack spacing={1} direction="column">
                    <Button variant="contained"
                        sx={{
                            mt: 3,
                            mb: 3,
                            color: "white",
                            backgroundColor: "primary.main"
                        }}
                        type="submit"
                        disabled={loading}>
                        Registrar Usuario
                    </Button>
                </Stack>
                <Stack spacing={1} direction="row">
                    <p> O desea iniciar sesion con: </p>
                    <IconButton 
                    type="submit"
                    disabled={loading}
                    onClick={handleRegWithGoogle} aria-label="delete">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                </Stack>
                <span>
                    ¿Ya tienes una cuenta? <Link href="/login">Inicia Sesion</Link>
                </span>


            </Box>
        </div>
    )
}

export default Register
