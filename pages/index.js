import Link from 'next/link'


const PokemonItem = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return(
    <tr>
      <td>{ id }</td>
      <td>
        <Link href={`pokemones/${id}`}>{ pokemon.name }</Link>
      </td>
    </tr>
  )
}

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

export default function Pokemones({ pokemones }) {

  console.log([pokemones])
  
  return (
    <main>
      <p>Pokemones</p>
      <PokemonesList pokemones={pokemones}></PokemonesList>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  const data = await res.json()
  
  return {
    props: {
      pokemones: data.results
    }
  }
}