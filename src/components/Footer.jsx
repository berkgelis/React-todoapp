import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="row d-flex flex-wrap justify-content-between align-items-center px-lg-5 py-4 border-top border-4 border-black ">
            <p className="col-md-4 mb-0 text-dark fw-semibold">© 2023 Vans Company, Inc</p>

            <Link to={"/"} className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img className='logo' src="https://i.pinimg.com/originals/29/0a/72/290a725a452af1b972299748b76217ea.png" alt="" />
            </Link>

            <Nav className="nav col-md-4 justify-content-end">
                <Link to={"/"} className="navLink mx-3 fw-semibold text-decoration-none text-dark">Anasayfa</Link>
                <Link to={"/classic"} className="navLink mx-3 fw-semibold text-decoration-none text-dark">Classics</Link>
                <Link to={"/skate"} className="navLink mx-3 fw-semibold text-decoration-none text-dark">Skate</Link>
                <Link to={"/surf"} className="navLink mx-3 fw-semibold text-decoration-none text-dark">Surf</Link>
            </Nav>
        </footer>
    )
}

export default Footer