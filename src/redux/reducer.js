import * as at from './actionTypes'

const initialState = {
  id: '',
  name: '',
  columns: [
    {
      id: 'column-1',
      name: 'Not started',
      cards: [{ id: 'card-1', content: 'GraphQL' }],
    },
    {
      id: 'column-2',
      name: 'In Prograss',
      cards: [{ id: 'card-2', content: 'Redux' }],
    },
    {
      id: 'column-3',
      name: 'Done',
      cards: [
        { id: 'card-3', content: 'React' },
        { id: 'card-4', content: 'Javascript' },
      ],
    },
  ],
}

/* action */

const createColumn = name => ({
  id: new Date().getTime(),
  name,
  cards: [],
})

const addColumn = (state, { name }) => {
  return {
    ...state,
    columns: [...state.columns, createColumn(name)],
  }
}

const columnsAfterDeletion = (cols, id) => {
  const newColumns = cols.filter(col => {
    return col.id !== id
  })

  return newColumns
}

const removeColumn = (state, { id }) => {
  return {
    ...state,
    columns: columnsAfterDeletion([...state.columns], id),
  }
}

const columnsAfterEdit = (cols, editedText, id) => {
  const editedColumns = cols.map(col => {
    if (col.id === id) {
      col.name = editedText
    }
    return col
  })

  return editedColumns
}

const editColumn = (state, { editedText, id }) => {
  console.log(editedText, id)
  return {
    ...state,
    columns: columnsAfterEdit([...state.columns], editedText, id),
  }
}

export default function boardReducer(state = initialState, action) {
  console.log('EXECUTING ACTION', action.type, action.payload)
  switch (action.type) {
    case at.ADD_COLUMN: {
      return addColumn(state, action.payload)
    }
    case at.DELETE_COLUMN: {
      return removeColumn(state, action.payload)
    }
    case at.UPDATE_COLUMN: {
      return editColumn(state, action.payload)
    }
    default: {
      return state
    }
  }
}
