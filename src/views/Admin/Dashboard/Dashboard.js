import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userLogged } from '../../../api/auth';

export default function Dashboard() {

	const { token, id } = useSelector(state => state.auth);

	const [user, setUser] = useState(null);

	useEffect( async () => {
		const { data } = await userLogged( id, token );
		setUser( data );

	}, [])

	return (
		<div>
			<p className='p-4 font-bold text-xl'>
				Dashboard page...
			</p>
			<div className='w-9/12 flex p-4 break-all'>
				<p> 
					Welcome <span>&nbsp;</span>
					<span className='font-black'>
						{ user?.firstname } { user?.lastname }
					</span>
				</p>
			</div>
		</div>
	)
}
