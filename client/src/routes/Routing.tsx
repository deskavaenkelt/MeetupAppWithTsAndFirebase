import { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AllMeetupsView from '../views/AllMeetupsView'
import FavoritesView from '../views/FavoritesView'
import NewMeetupView from '../views/NewMeetupView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import RoutingPath from './RoutingPath'

const Routing = (props: { children?: ReactNode }) => {
	
	return (
		<BrowserRouter>
			{ props.children }
			<Routes>
				<Route path={ RoutingPath.wildCardView } element={ <Navigate to={ RoutingPath.notFoundView }/> }/>
				<Route path={ RoutingPath.notFoundView } element={ <PageNotFoundView/> }/>
				<Route path={ RoutingPath.startView } element={ <AllMeetupsView/> }/>
				<Route path={ RoutingPath.newMeetupView } element={ <NewMeetupView/> }/>
				<Route path={ RoutingPath.favoritesView } element={ <FavoritesView/> }/>
			</Routes>
		</BrowserRouter>
	)
}

export default Routing
