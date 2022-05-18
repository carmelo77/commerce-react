import React from 'react';
import { Navigate, Route, Routes  } from 'react-router-dom';

/** Components */
import Headercomponent from '../../components/WebComponents/HeaderComponent';
import FooterComponent from '../../components/WebComponents/FooterComponent';

export default function Web(props) {
	const { routes, setRefreshLayout, isAuth } = props;

	if(isAuth.logged && !isAuth.isLoading) {
		return (
			<Navigate to='/admin/dashboard' />
		);
	}
	 
	return (
		<>
			<Headercomponent />
				<LoadRoutes routes={routes} setRefreshLayout={ setRefreshLayout } />
			<FooterComponent />
		</>
	)
}


function LoadRoutes({routes, setRefreshLayout}) {
  return (
    <Routes>
      {
				routes.map((route, index) => (
					<Route key={index} 
						path={route.path} 
						exact={route.exact} 
						element={<route.element setRefreshLayout={ setRefreshLayout } />} 
					/>
      	))
      }
    </Routes>
  );
}

