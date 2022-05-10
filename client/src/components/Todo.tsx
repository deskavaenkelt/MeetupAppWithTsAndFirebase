import React, { FC } from 'react'

export interface Props {
	text: string,
}

const Todo: FC<Props> = ({text}) => {
	
	return (
		<div className='card'>
			<h2>{ text }</h2>
			<div className='actions'>
				<button className='btn'>Delete</button>
			</div>
		</div>
	)
}

export default Todo
