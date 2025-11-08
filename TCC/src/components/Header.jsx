import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Link, Element, animateScroll as scroll } from "react-scroll"





function Header() {
    return(
        <>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow-sm">
                <Container>
                    <Navbar.Brand className=''>Galeria do Frei</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav classname="me-auto flex  justify-content-end">
                        <Nav.Link href="#" as={Link} to="sobre" smooth={true} duration={10} offset={-80} spy={true} classname=''>Sobre o Projeto</Nav.Link>
                        <Nav.Link href="#fotos" as={Link} to="galeria" smooth={true} duration={10} offset={-80} spy={true} classname="">Fotos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    ) 
} 

export default Header