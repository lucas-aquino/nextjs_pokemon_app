import PokemonesList from '@/components/PokemonesList'
import { styled } from 'styled-components'
import Content from '@/components/Content'
import { useState, useEffect } from 'react'
import Layout from './layout'

const PageTitle = styled.h1`
  margin: 25px 0px;
`

export default function Poke() {
  const [ loading, setLoading ] = useState(true)
  const [ pokemones, setPokemones ] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      const data = await res.json()
      setPokemones(data.results)
      setLoading(false)
    }
    getPokemones()
  }, [])

  if(loading) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <Layout>
      <Content>
        <PageTitle data-testid='title'>Lista de Pokemones</PageTitle>
        <PokemonesList pokemones={pokemones}></PokemonesList>
      </Content>
    </Layout>
  )
}
