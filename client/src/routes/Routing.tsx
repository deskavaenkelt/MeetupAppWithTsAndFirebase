import { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/ui/layout/Layout'
import AllMeetupsView from '../views/AllMeetupsView'
import FavoritesView from '../views/FavoritesView'
import NewMeetupView from '../views/NewMeetupView'
import { PageNotFoundView } from '../views/PageNotFoundView'
import RoutingPath from './RoutingPath'

const Routing = (props: { children?: ReactNode }) => {
	
	return (
		<BrowserRouter>
			{ props.children }
			<Layout>
				<Routes>
					<Route path={ RoutingPath.wildCardView } element={ <Navigate to={ RoutingPath.notFoundView }/> }/>
					<Route path={ RoutingPath.notFoundView } element={ <PageNotFoundView/> }/>
					<Route path={ RoutingPath.allMeetupsView } element={ <AllMeetupsView/> }/>
					<Route path={ RoutingPath.newMeetupView } element={ <NewMeetupView/> }/>
					<Route path={ RoutingPath.favoritesView } element={ <FavoritesView/> }/>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default Routing
