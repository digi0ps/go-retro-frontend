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
  return {
    ...state,
    columns: columnsAfterEdit([...state.columns], editedText, id),
  }
}

const createCard = cardInp => ({
  id: new Date().getTime(),
  content: cardInp,
})

const addCard = (state, { cardInp, colId }) => {
  const mutableColumns = [...state.columns]
  const newCol = mutableColumns.map(col => {
    if (col.id === colId) {
      const newCards = [...col.cards, createCard(cardInp)]
      col.cards = newCards
    }
    return col
  })

  return {
    ...state,
    columns: newCol,
  }
}

const deleteCards = (cards, cardId) => {
  const mutableCards = [...cards]

  const filteredCards = mutableCards.filter(card => {
    return card.id !== cardId
  })
  return filteredCards
}

const cardAfterDeletion = (state, { colId, cardId }) => {
  const mutableState = [...state.columns]
  const newColumns = mutableState.map(col => {
    if (col.id === colId) {
      const newCards = deleteCards(col.cards, cardId)
      col.cards = newCards
    }
    return col
  })

  return {
    ...state,
    columns: newColumns,
  }
}

const editCards = (cards, cardId, editedCard) => {
  const mutableCards = [...cards]
  const editedCards = mutableCards.map(card => {
    if (card.id === cardId) {
      card.content = editedCard
    }
    return card
  })

  return editedCards
}

const cardAfterEdit = (state, { colId, cardId, editedCard }) => {
  const mutableState = [...state.columns]
  const newCol = mutableState.map(col => {
    if (col.id === colId) {
      const newCards = editCards(col.cards, cardId, editedCard)
      console.log(newCards)
      col.cards = newCards
      console.log(col.cards)
    }
    return col
  })

  return {
    ...state,
    columns: newCol,
  }
}

const droppedCard = (state, { prevCardId, prevColId, currentColId }) => {
  console.log('from droppedCard()')
  return state
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
    case at.ADD_CARD: {
      return addCard(state, action.payload)
    }
    case at.DELETE_CARD: {
      return cardAfterDeletion(state, action.payload)
    }
    case at.UPDATE_CARD: {
      return cardAfterEdit(state, action.payload)
    }
    case at.DROP_CARD: {
      return droppedCard(state, action.payload)
    }
    default: {
      return state
    }
  }
}
