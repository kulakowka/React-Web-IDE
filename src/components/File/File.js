import React from 'react'
import { List } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

const File = ({ path, name }) => (
  <List.Item>
    <List.Icon name='code' />
    <List.Content>
      {document.location.pathname === path ? (
        <List.Header>{name}</List.Header>
      ) : (
        <Link to={path}>{name}</Link>
      )}
    </List.Content>
  </List.Item>
)

export default File
