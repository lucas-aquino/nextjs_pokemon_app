import { render, screen, waitFor } from "@testing-library/react"
import Poke from '../pages/poke'

describe('Poke', () => {
  it('renders pokemones', async () => {
    const mokResults = [{
      name: 'Charmander',
      url: '/pokemones/4'
    }]
    global.fetch = jest.fn()
      .mockImplementation(url => {
        return new Promise((resolve) => {
          resolve({
            json: () => Promise.resolve({
              results: mokResults
            })
          })
        })
      })

    render (
      <Poke></Poke>
    )
    const loading = screen.getByText('Cargando...')
  
    expect(loading).toBeInTheDocument()
    
    await waitFor(() => screen.getByText('Lista de Pokemones'))
    
    const element = screen.getByTestId(4)
    const anchor = element.children[0]
    
    
    expect(anchor).toHaveAttribute('href', 'pokemones/4')
    expect(anchor).toHaveTextContent('Charmander')
  })
})
