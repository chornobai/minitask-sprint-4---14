import { ThunkDispatch } from 'redux-thunk'
import { AppDispatch } from '../../app/store.ts'
import { AddDecksParams, decksAPI, DecksItems, ResponseDecksType } from './decks-api.ts'
import { act } from 'react-dom/test-utils'

const initialState = {
  decks: [] as DecksItems[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "GET_DECKS" :
      return {
        ...state, // сохраняем остальные части state
        decks:action.decks, // обновляем массив колод
      }
    case "POST_DECKS":
      return {
        ...state,
        decks:[action.deck,...state.decks]
  }
    default:
      return state
  }
}

type DecksActions = getACType | postACType



export type getACType = ReturnType<typeof getAC>
export type postACType = ReturnType<typeof postAC>
export const getAC = ( decks:DecksItems[])=> ({
  type:"GET_DECKS" as const, decks
})
export const postAC = (deck:DecksItems)=> ({
  type:"POST_DECKS" as const, deck
})



