import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle'




function Header() {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
                <Container>
                    <Navbar.Brand className=''>Galeria do Frei</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav classname="me-auto flex  justify-content-end">
                        <Nav.Link href="#sobre" classname=''>Sobre o Projeto</Nav.Link>
                        <Nav.Link href="#fotos" classname="">Fotos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    ) 
} 

export default Header