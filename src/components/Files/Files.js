import React, { Component } from 'react'
import { Button, Segment, Grid, List, Container } from 'semantic-ui-react'
import Folder from '../Folder/Folder'
import File from '../File/File'
import Header from '../Header/Header'
import FilePath from '../FilePath/FilePath'
import FileEditor from '../FileEditor/FileEditor'
import CreateComponentForm from '../CreateComponentForm/CreateComponentForm'
import EditComponentForm from '../EditComponentForm/EditComponentForm'

class Files extends Component {
  componentWillMount () {
    this.props.selectFile(this.props.path)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.path !== this.props.path) {
      this.props.selectFile(nextProps.path)
    }
  }
  renderFile ({ type, path, filename, files }) {
    if (type === 'file') {
      return (
        <File key={`file-${path}`} name={filename} path={path} />
      )
    }
    return (
      <Folder key={`folder-${path}`} name={filename} path={path}>
        {files && files.map(this.renderFile.bind(this))}
      </Folder>
    )
  }
  render () {
    const {
      path,
      file,
      files,
      selectFile,
      createComponent,
      updateComponent
    } = this.props
    return (
      <Container>
        <br />
        <Header />
        <Segment attached='bottom'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment vertical>
                  <List
                    //size='large'
                  >
                    {files.map(this.renderFile.bind(this))}
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment vertical>
                  <FilePath path={path} />
                </Segment>
                {file && file.type === 'file' && (
                  <Segment vertical>
                    <FileEditor file={file} selectFile={selectFile} />
                    <Button>Save</Button>
                  </Segment>
                )}
                {file && file.isComponents && (
                  <Segment vertical>
                    <CreateComponentForm file={file} onSubmit={createComponent} />
                  </Segment>
                )}
                {file && file.isComponent && (
                  <Segment vertical>
                    <EditComponentForm component={file} onSubmit={updateComponent} />
                  </Segment>
                )}
                {file && file.isComponentFile && (
                  <p>isComponentFile</p>
                )}
                {file && file.isActions && (
                  <Segment vertical>
                    <Button>Create action</Button>
                  </Segment>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default Files
