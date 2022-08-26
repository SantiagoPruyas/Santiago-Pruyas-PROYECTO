import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Head from 'next/head';
import styles from '../../styles/Character.module.css';
import { privatePage } from "../../context/route";
import { Button } from "@mui/material";
import { indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const RicksDetails = () => {
    const boton = createTheme({
        palette: {
            primary: {
                main: indigo[900],
            },
        }
    });
    const router = useRouter()

    const { RickID } = router.query

    const [character, setCharacter] = useState()

    const getCharacters = async () => {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/${RickID}`
        )

        setCharacter(response.data)
    }

    useEffect(() => {
        getCharacters()
    }, [])



    return character ? <div className={styles.container}>
        <Head>
            <title>{character ? character.name : "Detalle de Personaje"}</title>
        </Head>
        <img src={character.image} className={styles.img}></img>
        <div className={styles.text}>
            <h1 className={styles.name}> {character.name} </h1>
            <p> Estado: {character.status} </p>
            <p> Especie: {character.species} </p>
            <p> Genero: {character.gender} </p>
            <p> Lugar de Origen: {character.origin.name} </p>
            <p> Actualmente esta en: {character.location.name}</p>
            <Button variant="contained" theme={boton} size="small" startIcon={<ShoppingCartIcon />}>
                Comprar
            </Button>
        </div>

    </div> : <p>Loading...</p>
}

export default privatePage(RicksDetails);
