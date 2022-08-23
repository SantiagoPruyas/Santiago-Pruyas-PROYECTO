import { useState } from "react";
import { Button } from "@mui/material"

function LogOut () {
    const [loading, setLoading] = useState ()

    function handleLogOut () {}

    return (
        <div>
            <h1>Aqui podras desloguear tu usuario</h1>
            <h2>Si usted no ha iniciado sesion o no tiene una sesion, no deberia estar aqui</h2>
            <Button
            onClick={handleLogOut}
            variant="contained"
            sx={{mt:3 , mb:2 , color:"white"}}
            disabled={loading}>
                LogOut
            </Button>
        </div>
    )
}