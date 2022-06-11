import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 30px;
    display: flex;
    justify-content: space-around;

    padding: 0.5rem calc((100vw - 1000px)/2);
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0.1rem;
    height:100%
    cursor: pointer;
    margin-right: 5vw;
    margin-left: 5vw;

    &.active{
        color: #15cdfc;
    }
`
export const Bars = styled(FaBars)`
    Display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.nav`
    border-radius: 4px;
    background: #256cel;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    trasintion: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `