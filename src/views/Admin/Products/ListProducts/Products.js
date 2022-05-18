import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/**  */
import TableComponent from '../../../../components/AdminComponents/ProductsComponent/TableComponent';
import { getProducts } from '../../../../actions/products';

export default function Products() {

	const dispatch = useDispatch();
	const products = useSelector(state => state.products);

	const index = () => {
		dispatch( getProducts() );
	}

	return (
		<div>
			<div className='flex justify-between py-3'>
				<p className="text-xl font-bold mb-4">List products</p>
				<Link 
					to='/admin/products/create' 
					className='btn-success text-center text-sm p-2 hover:text-black'
				>
					Create new Product 
				</Link>
			</div>
			<TableComponent 
				index={ index } 
				products={ products }
			/>
		</div>
	)
}
