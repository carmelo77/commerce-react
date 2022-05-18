import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { storeCategoryApi, updateCategoryApi } from '../../../../api/category';
import { success as successMsg } from '../../../../utils/alerts';
import { useForm } from '../../../../hooks/useForm'; 

export default function FormComponent({ categories }) {
	const navigate = useNavigate();

	let [ formValues, handleInputChange, editValues ] = useForm({
		name: '',
	});

	const store = async (e) => {
		e.preventDefault();

		try {
			const res = await storeCategoryApi( formValues );
			if(res.success) {
				successMsg( res.message );
			}

			navigate('/admin/categories');
			
		} catch (error) {
			console.log(error);
		}
	}

	const update = async (e) => {
		e.preventDefault();

		try {
			const res = await updateCategoryApi( categories.id, formValues );
			if(res.success) {
				successMsg( res.message );
			}

			navigate('/admin/categories');
			
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if(categories) {
			const c = {
				name: categories.name,
			}
	
			editValues(c);
		}

	}, [categories]);

	return (
		<div>
			<form className='w-1/2 m-auto' onSubmit={ categories ? update : store }>
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
