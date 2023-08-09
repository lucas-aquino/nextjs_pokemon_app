import PokemonesList from '@/components/PokemonesList'
import { styled } from 'styled-components'
import Content from '@/components/Content'

import Layout from './layout'

const PageTitle = styled.h1`
  margin: 25px 0px;
`

export default function Pokemones({ pokemones }) {
  return (
    <Layout>
      <Content>
        <PageTitle data-testid='title'>Lista de Pokemones</PageTitle>
        <PokemonesList pokemones={pokemones}></PokemonesList>
      </Content>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = await res.json()
  
  return {
    props: {
      pokemones: data.results
    }
  }
}