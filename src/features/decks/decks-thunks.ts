import { AppDispatch } from '../../app/store.ts'
import { AddDecksParams, decksAPI } from './decks-api.ts'
import { getAC, postAC } from './decks-reducer.ts'

export const getTC =()=>(dispatch:AppDispatch)=>{

  decksAPI.getDecks().then(res => dispatch(getAC(res.data.items)))
}
export const postTC =(params:AddDecksParams)=>(dispatch:AppDispatch)=>{
  return decksAPI.postDecks(params).then(res => dispatch(postAC(res.data)))
}