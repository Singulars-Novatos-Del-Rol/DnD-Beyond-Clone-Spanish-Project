import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElement'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Libros" activeStyle>Libros</NavLink>
                    <NavLink to="/Razas" activeStyle>Razas</NavLink>
                    <NavLink to="/Clases" activeStyle>Clases</NavLink>
                    <NavLink to="/Origen" activeStyle>Origen</NavLink>
                    <NavLink to="/Hechizos" activeStyle>Hechizos</NavLink>
                    <NavLink to="/Proezas" activeStyle>Proezas</NavLink>
                    
                </NavMenu>

                {/* <NavBtn>
                    <NavBtnLink to='/singin'>Sign In</NavBtnLink>
                </NavBtn> */}
                
            </Nav>
        </>
    )
}

export default Navbar
