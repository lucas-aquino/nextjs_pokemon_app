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

export default PokemonItem
