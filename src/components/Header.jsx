import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="px-lg-4 py-3 ">
                <Container fluid>
                    <Link to={"/"}>
                        <img className='container logo' src="https://i.pinimg.com/originals/29/0a/72/290a725a452af1b972299748b76217ea.png" alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Link className='navLink text-decoration-none m-3 text-dark fw-semibold' to={"/"}>Anasayfa</Link>
                            <Link className='navLink text-decoration-none m-3 text-dark fw-semibold' to={"/classic"}>Classics</Link>
                            <Link className='navLink text-decoration-none m-3 text-dark fw-semibold' to={"/skate"}>Skate</Link>
                            <Link className='navLink text-decoration-none m-3 text-dark fw-semibold' to={"/surf"}>Surf</Link>
                        </Nav>
                        <Nav className='gap-3'>
                            <Button className='accountButton  border-0'><Link className='p-3 text-decoration-none fw-semibold text-light' to={"/"}>Giriş Yap</Link></Button>
                            <Button className='accountButton  border-0'><Link className='p-3 text-decoration-none fw-semibold text-light' to={"/"}>Kayıt ol</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-dark text-light text-center py-1 '>
                750 TL ve üzeri <span className='shipping'>ÜCRETSİZ KARGO</span>
            </div>
        </div>
    );
}

export default Header;