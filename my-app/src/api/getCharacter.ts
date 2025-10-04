import adapterCharacters from "../adapter/adapterCharacters";

export const getCharacter = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      console.log("personaje no encontrado");
    }
    const data = await response.json();
    const result = adapterCharacters(data.results);
    console.log(result, "result en getCharacter");
    return result;
  } catch (error) {
    console.error("Error fetching character data:", error);
  }
};
