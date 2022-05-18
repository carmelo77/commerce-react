import React from 'react';
import { useDispatch } from 'react-redux';
import { BarsOutlined, BellOutlined, LogoutOutlined } from '@ant-design/icons';

import { logout } from '../../../actions/auth';
import { success as successMsg } from '../../../utils/alerts';

export default function HeaderComponent({ setShowSidebar, setShowSidebarMobile, setRefreshLayout }) {

	const dispatch = useDispatch();

	const toggleSidebarMd = () => {
		setShowSidebar( val => !val );
	}

	const toggleSidebarSm = () => {
		setShowSidebarMobile( val => !val );
	}

	const logoutSession = () => {
		dispatch( logout() );
		successMsg('Has deslogueado éxitosamente..');
		setRefreshLayout(true);
	}

	return (
		<nav className="bg-white">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<button 
							id="sidebarBtn" 
							className="sm:hidden md:block px-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200"
							onClick={ toggleSidebarMd }
						>
							<BarsOutlined className='pb-2' />
						</button>

						<button 
							id="sidebarBtn" 
							className="md:hidden px-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200"
							onClick={ toggleSidebarSm }
						>
							<BarsOutlined className='pb-2' />
						</button>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

						<div className="ml-3 relative">
							<div>
								<button className="text-xl text-gray-800 px-4 py-2 focus:outline-none"
								id="notificationsBtn">
									<BellOutlined className='mb-2'/>
								</button>
							</div>

							<div id="notificationsDiv" className="hidden origin-top-right absolute right-0 mt-2 w-64
							rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5
							focus:outline-none">
								<p className="p-2 text-sm text-gray-700">Not results...</p>
							</div>
						</div>

						<div className="ml-3 relative">
							<div>
								<button 
									className="text-xl text-gray-800 px-4 py-2 focus:outline-none"
									id="notificationsBtn"
									onClick={ logoutSession }
								>
									<LogoutOutlined className='mb-2'/>
								</button>
							</div>
						</div>

						<div className="ml-3 relative">
							<div>
								<button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none
								focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="profileBtn">
									<span className="sr-only">Open user menu</span>
									<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</button>
							</div>

							<div id="profileDiv" className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
								<a href="#" className="block px-4 py-2 text-sm text-gray-700">
									<i className="fas fa-user mr-2"></i>Your Profile
								</a>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700">
									<i className="fas fa-cog mr-2"></i>Settings
								</a>
								<a href="#" className="block px-4 py-2 text-sm text-gray-700">
									<i className="fas fa-sign-out-alt mr-2"></i>Sign out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
