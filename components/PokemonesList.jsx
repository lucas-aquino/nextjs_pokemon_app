import { styled } from "styled-components"
import PokemonItem from "./PokemonItem"

const Table = styled.table`
  color: #fff;

  width: 100%;
  border-collapse: collapse;

  border-radius: 10px;
  background-color: #16213e60;

  user-select: none;
  
  thead th {
    padding: 25px 0px;
  }

  thead th:nth-child(1) {
    width: 10%;
  }

  thead th:nth-child(2) {
    text-align: left;
  }

  
  tbody td:nth-child(1) {
    text-align: center;
  }

  tbody td {
    padding: 10px 0px;
    margin: 0;
  }

  tbody tr:hover {
    background-color: rgba(255,255,255,0.2);
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`

const PokemonesList = ({ pokemones }) => {
  return (
    <Table>
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
    </Table>
  )
}

export default PokemonesList
