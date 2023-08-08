import Container from "@/components/Container"
import Navbar from "@/components/Navbar"

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar></Navbar>
      { children }
    </Container>
  )
}