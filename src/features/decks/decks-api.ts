import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
   return instance.get<ResponseDecksType>("v2/decks")
},
postDecks(params:AddDecksParams){
		return instance.post<DecksItems>("v1/decks" , params)
}
}


export type AddDecksParams = {
	name:string
}

export type ResponseDecksType = {
	items: DecksItems[];
	pagination: Pagination;
}
export type Author = {
	id: string;
	name: string;
}
export type DecksItems = {
	isFavorite: boolean;
	author: Author;
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	cover: string;
	created: string;
	updated: string;
	cardsCount: number;
}
export type Pagination = {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	totalItems: number;
}



