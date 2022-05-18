import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormProductComponent 
	from '../../../../components/AdminComponents/FormProductComponent';
import { showProductApi } from '../../../../api/products';

export default function EditProduct() {

	const { id } = useParams();
	const { token } = useSelector(state => state.auth);

	const [product, setProduct] = useState(null);

	const show = async () => {
		try {
			const response = await showProductApi(id, token);
			if(response.success) {
				setProduct(response.data)
			}

		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		show();
	}, [id]);
	

	return (
		<div>
			<p className='text-2xl font-bold py-3'>
				Edit product
			</p>
			<FormProductComponent 
				product={ product }
				token={ token }
			/>
		</div>
	)
}
