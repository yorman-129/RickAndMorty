import { useEffect, useState } from "react";
import { getCharacter } from "../../../api/getCharacter";
import style from "./RickMorty.module.css";
import { modelCharacter } from "./RickMorty.model";

export const RickMorty = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacter();
      setCharacters(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      {characters.map((character: modelCharacter, index: number) => (
        <div key={index} className={style.card}>
          <h2 className={style.title}>{character.name}</h2>
          <img
            className={style.img}
            src={character.image}
            alt={character.name}
          />
          <p
            className={character.status === "Alive" ? style.alive : style.dead}
          >
            Status: {character.status}
          </p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
};
