import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Pokemones({ pokemones }) {

  console.log(`DATA: ${pokemones}`)
  
  return (
    <main>
      <p>Pokemones {pokemones}</p>
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