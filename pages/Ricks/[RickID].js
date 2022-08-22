import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Head from 'next/head';
import styles from '../../styles/Character.module.css';

const RicksDetails = () => {
    const router = useRouter()

    const {RickID} = router.query
    
    const [character, setCharacter] =  useState()

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
            <title>{character ? character.name:"Detalle de Personaje"}</title>
        </Head>
        <h1> {character.name} </h1>
        <img src={character.image} className={styles.img}></img>
        <p> Estado: {character.status} </p>
        <p> Especie: {character.species} </p>
        <p> Genero: {character.gender} </p>
        <p> Lugar de Origen: {character.origin.name} </p>

        <p> Actualmente esta en: {character.location.name}</p>

    </div>: <p>Loading...</p>
}

export default RicksDetails ;
