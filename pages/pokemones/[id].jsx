import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { styled } from "styled-components"

const Card = styled.div`
  width: 250px;
  height: 350px;
  background: linear-gradient(135deg, #ffcb05, #fd1d1d);
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0.6;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0.6;
    pointer-events: none;
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .pokemon-image {
    width: 250px;
    height: 250px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
    image-rendering: pixelated;
  }

  .pokemon-name {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }

  .pokemon-type {
    font-size: 16px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }

  .pokemon-ability {
    font-size: 14px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
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
