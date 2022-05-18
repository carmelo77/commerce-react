import React from 'react';
import { Link } from 'react-router-dom';

const page404 = () => {
	return (
		<div className='text-5xl text-black py-72 text-center'>
				Page not found please go to Home again.
				<p className='my-10'>
					<Link to='/' className='text-lg text-white font-bold p-4 rounded-md bg-emerald-600 cursor-pointer hover:bg-emerald-500 transition duration-500'>
						Go to home
					</Link>
				</p>
		</div>
	)
}

export default page404;
