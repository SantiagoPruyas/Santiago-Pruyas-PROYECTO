import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import ImgMediaCard from "../Component/card.js";
import axios from "axios";
import TransitionsModal from '../Component/ModalForm';
import Head from 'next/head';

export default function Home() {
  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/character/"
    ,
    )
    setCharacters(response.data.results)
  }

  useEffect(() => {
    getCharacters()
  }, [setCharacters])

  const generateId = () => Math.random().toString(36)

  const createElement = (name, species) => {
    let newElement = {
      id: generateId(),
      name: name,
      species: species,
      image: "http://pm1.narvii.com/6798/ff2564a73865046a1a6a91ea142067e051f8a3d8v2_00.jpg",
      location: "Citadel of ricks"
    }

    setCharacters((prevState) => [...prevState, newElement])

    axios.post('https://rickandmortyapi.com/api/character/', newElement)
      .then(results => setCharacters(results.data))
      .catch(err => console.log(err))
  }
  return (
    <article className={styles.back}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.background}>
        {characters.map(character => <ImgMediaCard
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          location={character.location.name}
          image={character.image}
        />)}

      </div>
      <div className={styles.modal}>
        <TransitionsModal createElement={createElement}></TransitionsModal>
      </div>
    </article>
  )

}
