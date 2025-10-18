import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';




function Header() {
    return(
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className='flex justify-center '> 
                        <h1 className='rubik text-[40px]'>Galeria do Frei</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header