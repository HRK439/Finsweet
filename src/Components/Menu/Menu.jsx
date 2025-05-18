import './menu.css'
import { Button,Navbar,Nav,Container } from 'react-bootstrap';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <Navbar expand="lg" className="navrrr">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <Link className='mm' to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='mm' to='/About'>About us</Link>
              </Nav.Link>
            <Nav.Link>
              <Link className='mm' to='/Features'>Features</Link>
            </Nav.Link>
            <Nav.Link>
               <Link className='mm' to='/Pricing'>Pricing</Link>
            </Nav.Link>
            <Nav.Link className='mm' href="#link">FAQ</Nav.Link>
            <Nav.Link className='mm' href="#link">Blog</Nav.Link>
            <Button className='Nav_3btn'  variant="outline-secondary">Contact us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu