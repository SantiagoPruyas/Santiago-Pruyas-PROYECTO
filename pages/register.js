import * as React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import styles from '../styles/Register.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from "../context/auth"

const Register = () => {
    const { regWithGoogle, register } = useAuth()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
    })
    const [errPass, setErrPass] = useState(false)
    const [err, setErr] = useState("")

    function handleChange(e) {
        setUser({ ...user, [e.target.value]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (user.password !== user.passwordConfirm) {
            return setErrPass(true)
        } else {
            setErrPass(false)
        }
        setLoading(true)
        register(user)
            .then(() => console.log("registro listo"))
            .catch(() => {
                setLoading(false)
            })
    }

    function handleRegWithGoogle() {
        regWithGoogle()
            .then(() => console.log("salio bien"))
            .catch(() => console.log("salio mal"))
    }

    return (
        <div className={styles.register}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Typography
                    sx={{
                        color: 'black',
                        textAlign: 'center',
                    }}
                >
                    Registrate para obtener tu cuenta
                </Typography>
                <TextField
                    sx={{ margin: 3 }}
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    required
                    onChange={handleChange}
                />
                <TextField
                    sx={{ margin: 3 }}
                    type="password"
                    name="password"
                    required
                    label="Contraseña"
                    variant="outlined"
                    id="password"
                    onChange={handleChange}
                />
                <TextField
                    sx={{ margin: 3 }}
                    type="password"
                    name="passwordConfirm"
                    required
                    label="Confirmar Contraseña"
                    variant="outlined"
                    id="confirmPassword"
                    onChange={handleChange}
                />
                {errPass ? "Las contraseñas deben coincidir" : ""}
                <span>
                    <Link href="/olvidoPass">¿Olvidaste tu contraseña?</Link>
                </span>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "white" }}
                    type="submit"
                    disabled={loading}>
                    REGISTRARSE
                </Button>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "black" }}
                    onClick={handleRegWithGoogle}
                    type="submit"
                    disabled={loading}>
                    <GoogleIcon fontSize="small" />
                    &nbsp; Ingresar con Google
                </Button>
            </form>
            <span>
                ¿Ya tienes una cuenta? <Link href="/login">Inicia Sesión</Link>
            </span>
        </div >
    )
}

export default Register
