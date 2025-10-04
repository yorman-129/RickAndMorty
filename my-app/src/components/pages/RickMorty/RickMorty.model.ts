export interface modelCharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown"; // restringido a los valores posibles
  species: string;
  image: string;
}

