import React from 'react'
import { Menu } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
import { BASE_PATH } from '../../constants'

const MenuItem = ({ to, children }) => (
  <Menu.Item
    as={Link}
    active={document.location.pathname.startsWith(BASE_PATH + to)}
    to={to}
  >
    {children}
  </Menu.Item>
)

const Header = (props) => (
  <Menu attached='top'>
    <Menu.Item
      as={Link}
      active={document.location.pathname === '/'}
      to='/'
    >
      App
    </Menu.Item>
    <MenuItem to='/actions'>Actions</MenuItem>
    <MenuItem to='/components'>Components</MenuItem>
    <MenuItem to='/constants'>Constants</MenuItem>
    <MenuItem to='/containers'>Containers</MenuItem>
    <MenuItem to='/reducers'>Reducers</MenuItem>
    <MenuItem to='/store'>Store</MenuItem>
  </Menu>
)

export default Header
