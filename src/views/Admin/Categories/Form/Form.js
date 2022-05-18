import React from 'react';

import FormCategoryComponent 
	from '../../../../components/AdminComponents/CategoriesComponent/FormComponent';

export default function Form() {

	return (
		<div>
			<p className='text-2xl font-bold py-3'>
				Create a new Category
			</p>
			<FormCategoryComponent 
				categories={ null }
			/>
		</div>
	)
}