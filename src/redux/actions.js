import * as at from './actionTypes'

export const addColumn = name => ({
  type: at.ADD_COLUMN,
  payload: {
    name,
  },
})

export const deleteColumn = id => ({
  type: at.DELETE_COLUMN,
  payload: {
    id,
  },
})
