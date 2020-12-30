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

const createColumn = name => ({
  id: new Date().getTime(),
  name,
  cards: [],
})

/* action */
const addColumn = (state, { name }) => {
  return {
    ...state,
    columns: [...state.columns, createColumn(name)],
  }
}

export default function (state = initialState, action) {
  console.log('EXECUTING ACTION', action.type, action.payload)
  switch (action.type) {
    case at.ADD_COLUMN: {
      return addColumn(state, action.payload)
    }
    default: {
      return state
    }
  }
}
