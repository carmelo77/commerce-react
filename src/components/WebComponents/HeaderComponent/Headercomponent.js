import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Headercomponent() {
	return (
		<div className='mx-auto'>
			<nav className='py-2 bg-emerald-600 flex justify-between items-center pr-3'>
				<div className='logo p-2 w-1/6'>
					<span className='font-bold text-lg text-white'>
						LOGO CFR Commerce
					</span>
				</div>
				<div className='links'>
					<ul className='menu flex justify-center items-center gap-5 p-3 text-white'>
						<li className='menu-links'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='menu-links'>
							<NavLink to='/'>About us</NavLink>
						</li>
						<li className='menu-links'>
							<NavLink to='/products'>Products</NavLink>
						</li>
						<li className='menu-links'>
							<a href='#'>Contact us</a>
						</li>

						<li className='menu-links'>
							<NavLink to='/login'>Sign in</NavLink>
						</li>

						<li className='menu-links'>
							<NavLink to='/cart'>
								<ShoppingCartOutlined className='text-2xl cursor-pointer' />
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
