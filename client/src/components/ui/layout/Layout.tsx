import { ReactNode } from 'react'
import css from './Layout.module.css'

const Layout = (props: { children?: ReactNode }) => {
	
	return (
		<main className={ css.main }>
			{ props.children }
		</main>
	)
}

export default Layout
