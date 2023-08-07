import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { styled } from "styled-components"

const Card = styled.div`
  
`

const Pokemon = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <Card>
        <div className='card-content'>
          <Image className='pokemon-image' src={ data.sprites.front_default } width={250} height={250}></Image>
          <div className='pokemon-name'>{ data.name }</div>
          <div className='card-description'></div>
        </div>
      </Card>
      <Link href={'/'}>Volver al inicio</Link>
    </div>
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
