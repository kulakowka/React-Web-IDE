import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { reducer as formReducer } from 'redux-form'
import {
  CREATE_COMPONENT,
  UPDATE_COMPONENT
} from '../actions'
import shortid from 'shortid'

const capitalize = str => str[0].toUpperCase() + str.slice(1)

const createComponentFile = ({ payload }, ext) => {
  const id = shortid.generate()
  const componentName = capitalize(payload.name)
  const filename = componentName + '.' + ext
  const path = '/' + componentName + '/' + filename
  return {
    code: `// Source for ${path}`,
    isComponentFile: true,
    type: 'file',
    filename,
    path,
    id
  }
}
const createComponentFolder = ({ payload }) => {
  const id = shortid.generate()
  const filename = capitalize(payload.name)
  const path = '/' + filename

  return {
    isComponent: true,
    type: 'folder',
    filename,
    path,
    id
  }
}
const reducer = combineReducers({
  files: handleActions({
    [CREATE_COMPONENT]: (state, action) => {
      const parentId = state.byPath['/components']
      const parent = state.byId[parentId]
      const componentFolder = createComponentFolder(action)
      const componentFileJs = createComponentFile(action, 'js')
      const componentFileCss = createComponentFile(action, 'css')

      return {
        byPath: {
          ...state.byPath,
          [componentFolder.path]: componentFolder.id,
          [componentFileJs.path]: componentFileJs.id,
          [componentFileCss.path]: componentFileCss.id
        },
        byId: {
          ...state.byId,
          [componentFolder.id]: {
            ...componentFolder,
            files: [
              componentFileJs.id,
              componentFileCss.id
            ]
          },
          [componentFileJs.id]: componentFileJs,
          [componentFileCss.id]: componentFileCss,
          [parentId]: {
            ...parent,
            files: [ ...parent.files, componentFolder.id ]
          }
        }
      }
    },
    [UPDATE_COMPONENT]: (state, action) => {
      const { path } = action.payload
      const id = state.files.byPath[path]
      return {
        byId: {
          ...state.byId,
          [id]: {
            ...action.payload,
            type: 'folder',
            path,
            id
          }
        }
      }
    }
  }, { byId: {}, byPath: {} }),
  form: formReducer
})

export default reducer
