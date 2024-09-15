import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { useSelector } from 'react-redux'

import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectorDecks } from '../decks-selectors.ts'
import {getTC} from '../decks-thunks.ts'
import { useDecks } from './DeckItem/useDecks.ts'
export const DecksList = () => {
const {decks} = useDecks()
  return <ul className={s.list}>
    {
      decks.map((deck)=> <DeckItem deck={deck}/>)
    }
  </ul>
}
