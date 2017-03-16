import { connect } from 'react-redux'
import {
  selectFile,
  createComponent,
  updateComponent
} from '../actions'

import Files from '../components/Files/Files'

const getFileById = (state, id) => {
  return state.byId[id]
}
const getFileByPath = (state, path) => {
  const id = state.byPath[path]
  return getFileById(state, id)
}
const getFilesFromArray = (state, filesIds) => {
  return filesIds.map(id => {
    const file = { ...getFileById(state, id) }
    if (file.type === 'folder') {
      file.files = getFilesFromArray(state, file.files)
    }
    return file
  })
}

const FilesContainer = connect(
  (state, props) => {
    const path = props.match.params[0] || ''
    const rootFolder = getFileByPath(state.files, '/')
    const files = getFilesFromArray(state.files, rootFolder.files)
    return {
      path,
      files,
      file: getFileByPath(state.files, '/' + path)
    }
  },
  {
    selectFile,
    createComponent,
    updateComponent
  }
)(Files)

export default FilesContainer
