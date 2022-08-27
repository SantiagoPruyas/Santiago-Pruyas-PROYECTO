import * as React from 'react'
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
import { useAuth } from '../context/auth'
import { publicPage } from "../context/route"

const Login = () => {
    const { logIn, regWithGoogle } = useAuth()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [errPass, setErrPass] = useState(false)
    const [err, SetErr] = useState("")

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        logIn(user)
            .then(() => setLoading(false))
            .catch(() => {
                console.log("Usuario y/o contraseña incorrectos")
                setLoading(false)
            })
    }

    function handleRegWithGoogle() {
        regWithGoogle()
            .then(() => console.log("Entraste"))
            .catch(() => console.log("Salio mal"))
    }

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Typography
                    sx={{
                        color: 'black',
                        textAlign: 'center',
                    }}
                >
                    Inicia sesion con tu cuenta
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
                <span>
                    <Link href="olvidoPass">¿Olvidaste tu contraseña?</Link>
                </span>
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
                        Iniciar Sesión
                    </Button>
                </Stack>
                <Stack spacing={1} direction="row">
                    <p> O desea iniciar sesion con: </p>
                    <IconButton type="submit"
                        disabled={loading}
                        onClick={handleRegWithGoogle} aria-label="delete">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <FacebookIcon />
                    </IconButton>
                </Stack>
                <span>
                    ¿Aun no te has registrado? <Link href="/register">Registrate</Link>
                </span></form>
        </div>
    )
}

export default publicPage(Login)

