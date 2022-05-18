import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**  */
import TableComponent from '../../../../components/AdminComponents/CategoriesComponent/TableComponent';
import { getCategoriesApi } from '../../../../api/category';

export default function Categories() {

	const [categories, setCategories] = useState([]);

	const index = async () => {
		try {
			const response = await getCategoriesApi();
			setCategories( response.data );

		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		index();
	}, []);
	

	return (
		<div>
			<div className='flex justify-between py-3'>
				<p className="text-xl font-bold mb-4">List categories</p>
				<Link 
					className='btn-success text-center text-sm p-2 hover:text-black'
					to='/admin/categories/create'
				>
					Create new Category 
				</Link>
			</div>
			<TableComponent 
				index={ index } 
				categories={ categories }
			/>
		</div>
	)
}