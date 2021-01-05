import * as at from './actionTypes'

/* column actions */

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

export const editColumn = (editedText, id) => ({
  type: at.UPDATE_COLUMN,
  payload: {
    editedText,
    id,
  },
})

/* card actions */

export const addCards = (cardInp, colId) => ({
  type: at.ADD_CARD,
  payload: {
    cardInp,
    colId,
  },
})

export const deleteCards = (colId, cardId) => ({
  type: at.DELETE_CARD,
  payload: {
    colId,
    cardId,
  },
})

export const editCards = (colId, cardId, editedCard) => ({
  type: at.UPDATE_CARD,
  payload: {
    colId,
    cardId,
    editedCard,
  },
})

export const dropCard = (
  prevCardId,
  prevColId,
  currentCardId,
  currentColId,
) => ({
  type: at.DROP_CARD,
  payload: {
    prevCardId,
    prevColId,
    currentCardId,
    currentColId,
  },
})
