import { modelCharacter } from "../components/pages/RickMorty/RickMorty.model";

export default function adapterCharacters(data: any[]) {
  console.log(data, "data en adapter");
  const dataClean = data.map((item : modelCharacter) => {
    return {
      id: item.id,
      name: item.name,
      status: item.status,
      species: item.species,
      image: item.image,
    };
  });
  console.log(dataClean, "dataClean en adapter");
  return dataClean;
}
