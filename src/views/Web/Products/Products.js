import React, { useEffect, useState } from 'react';
import { Rate, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';

import ProductDefault from '../../../assets/images/product-default.png';
import { getProductsApi } from '../../../api/products';
import { addProductToCart } from '../../../actions/cart';

const Products = () => {

	const dispatch = useDispatch();

	const [products, setProducts] = useState([]);
	const [minVal, setMinVal] = useState(0);
	const [maxVal, setMaxVal] = useState(4);

	const productsIndex = async () => {
		try {
			const { data } = await getProductsApi();
			setProducts( data );
		} catch (err) {
			console.log(err);
		}
	}
	

	const add = ( product ) => {
		const prod = {
			id: product.id,
			name: product.name,
			category: product?.category?.name,
			price: product.price,
			qty: 1
		};

		dispatch( addProductToCart( prod ) );
	}

	const changePage = ( e ) => {
		setMinVal( (e - 1) * 4 );
		setMaxVal( e * 4 );
	}
	
	useEffect(() => {
		productsIndex();
	}, []);
	

	return (
		<div className='text-2xl text-emerald-600 font-black'>
			<p className='p-12'>List products</p>

			<div className='products mx-12 py-12 grid md:grid-cols-4 md:gap-5 sm:grid-cols-1 sm:gap-5'>
				
				{
					products.slice(minVal, maxVal).map( (product, index) => (
						<div 
							className='h-auto py-2 w-64 
							bg-emerald-300 rounded-md' 
							key={ index }
						>
							<img src={ ProductDefault } className='mx-auto' width={120} alt='Default image' />
							<p className='text-lg font-black text-gray-600 text-center'>
								{ product.name }
							</p>
							<p className='text-sm text-gray-600 text-center'>{ product.category.name }</p>
							<p className='text-[10px] text-gray-500 text-center'>
								{ product.description }
							</p>
							<p className='text-[12px] text-gray-500 text-center my-2'>
								${ product.price }
							</p>

							<div className='py-6 mx-4 flex md:flex-row sm:flex-col justify-between items-center'>
								<button 
									//href='#' 
									className='rounded-full w-12 h-12 text-center 
									border-emerald-500 border-2 pb-3'
									onClick={ () => add( product ) }
								> 
									<ShoppingCartOutlined /> 
								</button>
								<div>
									<Rate 
										className='text-xs mb-5'
										disabled
										defaultValue={ product.ratingsum / product.ratingcount }
									/>
								</div>
								<Link to={`/product-detail/${1}`} className='rounded-full w-12 h-12 text-center border-emerald-500 border-2'>
									<EyeOutlined /> 
								</Link>
							</div>
						</div>
					))
				}
			</div>

			<Pagination 
				defaultCurrent={1}
				defaultPageSize={4}
				onChange={ changePage }
				total={products.length + 1}
				className='text-center py-4'
			/>
		</div>
	)
}

export default Products;
