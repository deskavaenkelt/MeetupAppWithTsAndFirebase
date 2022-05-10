import { createContext, ReactNode, useState } from 'react'
import { MeetupItemProps } from '../interfaces/MeetupsInterfaces'

interface FavoritesContextInterface {
	favorites: Array<MeetupItemProps>
	totalFavorites: number
	addFavorite: (meetup: MeetupItemProps) => void
	removeFavorite: (meetupId: string) => void
	itemIsFavorite: (meetupId: string) => void
}

const FavoritesContext = createContext<FavoritesContextInterface | null>({
	favorites: [],
	totalFavorites: 0,
	addFavorite: () => {
		// This is intentional
	},
	removeFavorite: () => {
		// This is intentional
	},
	itemIsFavorite: () => {
		// This is intentional
	}
})

export const FavoritesContextProvider = (props: { children?: ReactNode }) => {
	const [userFavorites, setUserFavorites] = useState([])
	
	const addFavoriteHandler = (favoriteMeetup: any) => {
		setUserFavorites((prevUserFavorites: any) => {
			return prevUserFavorites.concat(favoriteMeetup)
		})
	}
	
	const removeFavoriteHandler = (meetupId: string) => {
		setUserFavorites((prevUserFavorites: any) => {
			return prevUserFavorites.filter((meetup: MeetupItemProps) => meetup.id !== meetupId)
		})
	}
	
	const itemIsFavoriteHandler = (meetupId: string) => {
		return userFavorites.some((meetup: MeetupItemProps) => meetup.id === meetupId)
	}
	
	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler
	}
	
	return (
		<FavoritesContext.Provider value={ context }>
			{ props.children }
		</FavoritesContext.Provider>
	)
}

export default FavoritesContext
