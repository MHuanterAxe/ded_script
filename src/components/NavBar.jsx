import React from 'react'
import styled from 'styled-components'
import {Icon, Navbar, NavItem} from "react-materialize";
const NavigationBar = () => (
  <Navbar className='green' id='navigation' menuIcon={<Icon>menu</Icon>}>
    <NavItem>
      Парсер адресов
    </NavItem>
    <NavItem>
      Команда
    </NavItem>
    <NavItem>
      Ссылки
    </NavItem>
  </Navbar>
)
export default NavigationBar

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  background-color: #4CAF50;
  justify-content: center;
`
const NavHeader = styled.h2`
  color: #ffffff;
`
