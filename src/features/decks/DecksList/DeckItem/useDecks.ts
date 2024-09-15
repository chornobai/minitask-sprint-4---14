import { useAppDispatch } from '../../../../app/store.ts'
import { useSelector } from 'react-redux'
import { selectorDecks } from '../../decks-selectors.ts'
import { useEffect } from 'react'
import { getTC } from '../../decks-thunks.ts'

export const useDecks =()=>

{
  const dispatch = useAppDispatch()
  const decks = useSelector(selectorDecks)
  useEffect(()=>{
 // decksAPI.getDecks().then(res=>dispatch(getAC(res.data.items)))

dispatch(getTC())
  },[dispatch])
  return {
    decks,
  }
}