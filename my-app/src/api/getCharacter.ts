export const getCharacter = async ()=>{
 try {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  if(!response.ok) {
    console.log("personaje no encontrado")
  }
  const data = await response.json()
  return data.results
 } catch (error) {
  console.error('Error fetching character data:', error);
 }
}