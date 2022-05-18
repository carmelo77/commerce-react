import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import DefaultImage from '../../../assets/images/product-default.png';
import { cleantProductsCart, decreaseProductCart, increaseProductCart } 
	from '../../../actions/cart';

export default function Cart() {

	const dispatch = useDispatch();

	const shopping_cart = useSelector( state => state.cart );
	
	const clearCart = () => {
		dispatch( cleantProductsCart() );
	}

	const increase = ( id ) => {
		dispatch( increaseProductCart( id ) );
	}

	const decrease = ( id ) => {
		dispatch( decreaseProductCart( id ) );
	}

	return (
		<div className='p-12 container min-h-[90vh]'>
			<p className='title text-xl text-emerald-500 font-black'>
				Cart
			</p>

			{
				shopping_cart.length > 0 && shopping_cart.map( (cart, index) => (
					<div 
						className='content py-12 container border-2 w-3/4 h-auto mx-auto flex justify-around'
						key={ index }
					>
						<img src={DefaultImage} className='mx-4' width={160} alt='Default' />
						<div className='content'>
							<p className='py-4 text-md text-emerald-300 font-bold'>{ cart.name }</p>
							<p className='py-4 text-md text-emerald-300 font-bold'>{ cart.category }</p>
							<p className='py-4 text-md text-emerald-300 font-bold'>
								Qty: { cart.qty } - ${ cart.price * cart.qty }
							</p>
						</div>

						<div className='actions flex flex-col py-4'>
							<button 
								className='w-12 h-12 rounded-full bg-emerald-400 text-white my-2 hover:bg-emerald-200 transition-all ease-linear duration-300'
								onClick={ () => decrease( cart.id ) }
							>
								<MinusOutlined className='text-xl pb-1' />
							</button>

							<button 
								className='w-12 h-12 rounded-full bg-emerald-400 text-white my-2 hover:bg-emerald-200 transition-all ease-linear duration-300'
								onClick={ () => increase( cart.id ) }
							>
								<PlusOutlined className='text-xl pb-1' />
							</button>
						</div>
					</div>
				))
			}

			<div className='py-12 text-center'>
				<button 
					className='btn-success'
					onClick={ clearCart }
				>
					Clean cart
				</button>
			</div>
			
		</div>
	)
}
