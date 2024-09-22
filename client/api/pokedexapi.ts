import axios from 'axios'

export const getPokemonList = async () => {
  const response = await axios.get('http://localhost:5000/api/pokemon')
  return response.data
}
