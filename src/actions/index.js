import { createAction } from 'redux-actions'

export const SELECT_FILE = 'files/SELECT_FILE'
export const selectFile = createAction(SELECT_FILE, (file) => ({ file }))

export const CREATE_COMPONENT = 'components/CREATE_COMPONENT'
export const createComponent = createAction(CREATE_COMPONENT)

export const UPDATE_COMPONENT = 'components/UPDATE_COMPONENT'
export const updateComponent = createAction(UPDATE_COMPONENT, (path, data) => ({ path, ...data }))
