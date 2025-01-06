import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CharacterDisplay from "./components/CharacterDisplay";
import PartList from "./components/PartList";
import { useState } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

export default function App() {
  const getRandomCharacter = () => {
    const randomCharacter = {};
    for (const key in total) {
      randomCharacter[key] = Math.floor(Math.random() * total[key]) + 1; // Random number from 1 to the total[key]
    }
    return randomCharacter;
  };

  const [character, setCharacter] = useState(getRandomCharacter());

  return (
    <>
      <Header />
      <Main>
        <CharacterDisplay
          character={character}
          getRandomCharacter={getRandomCharacter}
          setCharacter={setCharacter}
        />
        <PartList
          total={total}
          character={character}
          setCharacter={setCharacter}
        />
      </Main>
      <Footer />
    </>
  );
}
