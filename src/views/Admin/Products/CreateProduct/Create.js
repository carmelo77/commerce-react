import React from 'react';
import { useSelector } from 'react-redux';

import FormProductComponent from '../../../../components/AdminComponents/FormProductComponent/';

export default function CreateProduct() {

	const { token } = useSelector(state => state.auth);

	return (
		<div>
			<p className='text-2xl font-bold py-3'>
				Create a new product
			</p>
			<FormProductComponent 
				product={ null }
				token={ token }
			/>
		</div>
	)
}
