import * as at from './actionTypes'

export const addColumn = name => ({
  type: at.ADD_COLUMN,
  payload: {
    name,
  },
})
