import PokemonesList from '@/components/PokemonesList'
import { styled } from 'styled-components'
import Link from 'next/link'


const Container = styled.main`
  background-color: #1A1A2E;
  min-height: 100vh;
`
const Nav = styled.nav`
  padding: 20px 30px;
  background-color: #16213E;
`

const PageTitle = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color: #E94560;
  user-select: none;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #E94560;
`

const Navbar = () => {
  return (
    <Nav>
      <PageTitle><HomeLink href={'/'}>lucas-aquino's Pokemon App</HomeLink></PageTitle>
    </Nav>
  )
}

const Content = styled.div`

`

export default function Pokemones({ pokemones }) {
  return (
    <Container>
      <Navbar></Navbar>
      <Content>
        <PokemonesList pokemones={pokemones}></PokemonesList>
      </Content>
    </Container>
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