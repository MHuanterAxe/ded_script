import React from 'react'
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

