import { styled } from "styled-components"
import Link from "next/link"

const Nav = styled.nav`
  padding: 20px 30px;
  background-color: #16213e60;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  z-index: 1000;
  position: sticky;
  top: 0px;
`

const PageTitle = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  user-select: none;
  color: #E94560;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #E94560;
`
const Navbar = () => {
  return (
    <Nav>
      <PageTitle>
        <HomeLink href={'/'}>lucas-aquino's Pokemon App</HomeLink>
      </PageTitle>
    </Nav>
  )
}

export default Navbar