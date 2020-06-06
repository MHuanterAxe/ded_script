import React from 'react'
import styled from 'styled-components'
const NavigationBar = () => (
  <Nav>
    <NavLink>
      <NavLinkText active={true}>
        Парсер адресов
      </NavLinkText>
    </NavLink>
    <NavLink>
      <NavLinkText>
        Команда
      </NavLinkText>
    </NavLink>
    <NavLink>
      <NavLinkText>
        Ссылки
      </NavLinkText>
    </NavLink>
  </Nav>
)
export default NavigationBar

const Nav = styled.nav`
  display: flex;
  height: auto;
`
const NavLink = styled.a`
  width: 290px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #5EA957;
  border: ${props => props.active ? '1px solid #97DD91' : 'none'};
  box-sizing: border-box;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  border-radius: 64px;
`
const NavLinkText = styled.h3`
  padding: 16px;
  text-align: center;
  font-family: Proxima Nova, sans-serif, -apple-system;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`
