import React from 'react'
import { List } from 'semantic-ui-react'

const FilesList = () => (
  <List>
    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>src</List.Header>
        <List.List>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>site</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>themes</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>default</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>my_theme</List.Header>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header>theme.config</List.Header>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>dist</List.Header>
        <List.List>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>components</List.Header>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' />
      <List.Content>
        <List.Header>semantic.json</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default FilesList
