import { render, screen } from "@testing-library/react"
import Pokemones, { getStaticProps } from "../pages/index"


describe('Index', () => {

  describe('Component', () => {
    it('se renderiza', () => {
      const { getByTestId } = render(
        <Pokemones pokemones={[{
          name: 'Charmander',
          url: '/pokemones/4'
        }]} />
      )

      const paragraph = getByTestId('title')
    
      expect(paragraph).toBeInTheDocument() 
      
      const charmander = screen.getByText('Charmander')
      expect(charmander).toBeInTheDocument()
      const url = charmander.getAttribute('href')
      expect(url).toEqual('pokemones/4')

    }) 
  })

  describe('getStaticProps', () => {
    it('return pokemones', async () => {
      global.fetch = jest.fn()
        .mockImplementation((url) => {
          expect(url).toBe('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
          return new Promise( resolve => {
            resolve({
              json: () => Promise.resolve({
                results: 'lista de pokemones' 
              })
            })
          })
        })
        
        const { props } = await getStaticProps()
        
        expect(props.pokemones).toBe('lista de pokemones')

      })
    })
})