import { styled } from "styled-components"
import PokemonItem from "./PokemonItem"

const Table = styled.table`
  
`

const PokemonesList = ({ pokemones }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {pokemones.map(pokemon => 
          <PokemonItem pokemon={pokemon} key={pokemon.name}></PokemonItem>
        )}
      </tbody>
    </table>
  )
}

export default PokemonesList
