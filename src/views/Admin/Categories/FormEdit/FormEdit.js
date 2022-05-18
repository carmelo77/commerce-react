import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FormCategoryComponent 
	from '../../../../components/AdminComponents/CategoriesComponent/FormComponent';
import { showCategoryApi } from '../../../../api/category';

export default function FormEdit() {

	const { id } = useParams();

	const [categories, setCategories] = useState(null);

	const show = async () => {
		try {
			const response = await showCategoryApi(id);
			if(response.success) {
				setCategories(response.data)
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
				Edit category
			</p>
			<FormCategoryComponent 
				categories={ categories }
			/>
		</div>
	)
}
