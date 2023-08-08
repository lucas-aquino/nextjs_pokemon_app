import Link from "next/link"
import { useRouter } from "next/router"
import { styled } from "styled-components"
import Layout from "../layout"
import Content from "@/components/Content"
import Card from "@/components/Card"

const CardContainer = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;

`

const BackToHomeLink = styled(Link)`
  background-color: #E94560;
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  color: #fff;
  
  &:hover {
    background-color: #ee2b4b;
  }
`

const Pokemon = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout>
        <p>Cargando...</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Content>
        <CardContainer>
          <Card data={data}>
          </Card>
        </CardContainer>
        <BackToHomeLink href={'/'}>Volver</BackToHomeLink>
      </Content>
    </Layout>
  )
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export const getStaticPaths = async () => {

  const paths = [
    { params: { id: '1' } },
  ]

  return {
    paths,
    fallback: true
  }
}

/*
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
*/
