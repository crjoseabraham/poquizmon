import axios from "redaxios"

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
})

export default pokemonApi
