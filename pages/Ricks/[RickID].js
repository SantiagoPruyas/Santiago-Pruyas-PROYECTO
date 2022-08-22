import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const RicksDetails = ({id}) => {
    const router = useRouter()

    const {RickID} = router.query
    
    const [ricks, setRicks] =  useState()

    const getRicks = async () => {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/${RickID}`
        )

        setRicks(response.data)
    }

    useEffect(() => {
        getRicks()
    }, [])

    

    return ricks ? <div>
        <h1> Rick: {ricks.name} </h1>
        <p> Estado : {ricks.status} </p>
        <p> Especie: {ricks.species} </p>
        <p> Genero: {ricks.gender} </p>
        <p> Lugar de Origen: {ricks.origin.name} </p>

        <p> Actualmente esta en: {ricks.location.name}</p>
        <p>
             <img src={ricks.image}></img>
        </p>
    </div>: <p>Loading...</p>
}

export default RicksDetails ;
