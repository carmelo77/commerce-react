import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { getCategoriesApi } from '../../../api/category';
import { storeProductsApi, updateProductApi } from '../../../api/products';
import { success as successMsg } from '../../../utils/alerts';

export default function FormProductComponent({ product, token }) {
	
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);

	let [ formValues, handleInputChange, editValues ] = useForm({
		name: '',
		category: '',
		price: 0,
		description: ''
	});

	const indexCategories = async () => {
		try {
			const res = await getCategoriesApi();
			setCategories(res.data);

		} catch (err) {
			console.log(err + ' error ocurred');
		}
	}

	const store = async (e) => {
		e.preventDefault();

		try {
			const res = await storeProductsApi( token, formValues );
			if(res.success) {
				successMsg( res.message );
			}

			navigate('/admin/products');
			
		} catch (error) {
			console.log(error);
		}
	}

	const update = async (e) => {
		e.preventDefault();

		try {
			const res = await updateProductApi( product.id, formValues, token );
			if(res.success) {
				successMsg( res.message );
			}

			navigate('/admin/products');
			
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		indexCategories();
	}, [])

	useEffect(() => {
		if(product) {
			const p = {
				name: product.name,
				category: product.category_id,
				price: product.price,
				description: product.description
			}
	
			editValues(p);
		}

	}, [product]);

	return (
		<div>
			<form className='w-2/3 m-auto' onSubmit={ product ? update : store }>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Name</label>
					<input 
						className='input-control' 
						type='text'
						name='name'
						onChange={ handleInputChange }
						value={ formValues?.name }
						required
					/>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Category</label>
					<select 
						className='input-control' 
						name='category'
						onChange={ handleInputChange }
						value={ formValues?.category}
						required
					>
						<option>Selecciona una opción</option>
						{
							categories && categories.length > 0 && (
								categories.map((category, index) => (
									<option 
										key={ index }
										value={ category.id }
									>
										{ category.name }
									</option>
								))
							)
						}
					</select>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Price</label>
					<input 
						className='input-control' 
						type='text'
						name='price'
						onChange={ handleInputChange }
						value={ formValues?.price }
						required
					/>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Description</label>
					<textarea 
						className='input-control' 
						type='text'
						name='description'
						value={ formValues?.description }
						onChange={ handleInputChange }
					/>
				</div>

				<div className='font-bold text-md py-4'>
					<button 
						type='submit' 
						className='btn-info-outlined p-2 w-full'
					>
						Save
					</button>
				</div>
			</form>
		</div>
	)
}
