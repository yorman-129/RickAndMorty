export interface modelCharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown"; // restringido a los valores posibles
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "unknown"; // según API
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[]; // array de URLs
  url: string;
  created: string; // fecha en formato ISO
}