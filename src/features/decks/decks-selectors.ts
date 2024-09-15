import { AppRootState } from '../../app/store.ts'

export const selectorDecks = (state:AppRootState) => state.decksReducer.decks
