import { FC } from 'react'

interface Props {
	onCancel: () => void;
}

const Backdrop: FC<Props> = ({onCancel}) => {
	return (
		<div className='backdrop' onClick={onCancel}/>
	)
}

export default Backdrop
