import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

/** Components */
import HeaderComponent from '../../components/AdminComponents/HeaderComponent';
import SidebarComponent from '../../components/AdminComponents/SidebarComponent';


export default function Admin({ routes, isAuth, role, setRefreshLayout }) {

	const [showSidebar, setShowSidebar] = useState(true);
	const [showSidebarMobile, setShowSidebarMobile] = useState(true);

	if(!isAuth.logged && !isAuth.isLoading) {
		return (
			<Navigate to='/' />
		);
	}
	

	return (
		<div>
			<HeaderComponent 
				setShowSidebar={ setShowSidebar }
				setShowSidebarMobile={ setShowSidebarMobile }
				setRefreshLayout={ setRefreshLayout }
			/>

			<main className="flex bg-gray-100">

				<SidebarComponent 
					showSidebar={ showSidebar }
					showSidebarMobile={ showSidebarMobile }
				>
					<LoadRoutes 
						routes={ routes }
						role={ role }
					/>
				</SidebarComponent>

   		</main>


		</div>
	)
}

function LoadRoutes({routes, role}) {

	return (
		<Routes>
			{
				routes.map((route, index) => (
					<Route 
						key={ index }
						path={ route.path }
						exact={ route.exact }
						element={ 
							route.meta?.includes(role) 
								? <route.element /> 
								: <h1 className='font-black text-2xl text-center'>
										No autorizado
									</h1> 
						}
					/>
				))
			}
		</Routes>
	);
}
