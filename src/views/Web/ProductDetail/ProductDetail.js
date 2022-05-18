import React from 'react';
import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import ProductDefault from '../../../assets/images/product-default.png';

export default function ProductDetail() {

	const { id } = useParams();

	console.log(id);

	return (
		<div className='container border-2 rounded-md border-emerald-300 mx-auto text-center w-3/4 h-auto my-24'>
			<div className='Image border-b-2 border-emerald-500'>
				<img src={ ProductDefault } className='mx-auto' height='100%' width={120} alt='Default image' />
			</div>
			<p className='title py-4 text-center text-xl font-black text-emerald-500'>
				Audifonos
			</p>
			<p className='text-gray-400 text-sm text-center'>
				Some description from product...
			</p>
			<div className='flex flex-row justify-between items-center mx-12 py-4'>
				<div className='category-title py-4 text-center text-md font-black text-emerald-300'>
					Tech
				</div>
				<div>
					<Rate 
						className='text-sm'
						disabled
						defaultValue={4.0}
					/>
					&nbsp;
					<span className='font-black mx-4'>4.0</span>
				</div>
				<div>
					<a>
						<ShoppingCartOutlined className='text-xl text-emerald-300' />
					</a>
				</div>
			</div>
			<div className='comments py-8'>
				<p className='text-xl font-black text-emerald-500 text-left mx-12 my-10'>Comments</p>
				<section className='comment'>
					<p className='title-comment text-left mx-12 font-medium text-emerald-500'>
						Juan Perez / 3 day ago
					</p>
					<div className='text-left mx-12 py-2'>
						<Rate 
							className='text-sm'
							disabled
							defaultValue={4.0}
						/>
					</div>
					<p className='text-gray-400 font-normal text-sm text-left mx-12 py-4'>
						Wonderful place, fantastic atention, and excellent product.
					</p>
				</section>
			</div>
		</div>
	)
}
