import React from 'react'
import { List } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

const Folder = ({ path, name, children }) => (
  <List.Item>
    <List.Icon name='folder' />
    <List.Content>
      {document.location.pathname === path ? (
        <List.Header>{name}</List.Header>
      ) : (
        <Link to={path}>{name}</Link>
      )}
      {children && (
        <List.List>
          {children}
        </List.List>
      )}
    </List.Content>
  </List.Item>
)

export default Folder
