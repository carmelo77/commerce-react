import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import listroutes from './routes';
import { isTokenExpired, userLogged } from '../api/auth';
import { logout } from '../actions/auth';

export default function AppRouter() {

    const dispatch = useDispatch();

    const [isAuth, setIsAuth] = useState({
		logged: false, isLoading: true 
	});
    const [role, setRole] = useState(null);
    const [refreshLayout, setRefreshLayout] = useState(false);

	const { token, id } = useSelector( state => state.auth );

	useEffect(() => {

        setIsAuth( { ...isAuth, isLoading: true });
		
        if( isTokenExpired( token ) ) {
            setIsAuth( { logged: false , isLoading: false });
            setRole(null);
            dispatch( logout() );
        } else { 
            setIsAuth( { logged: true, isLoading: false } );
        }

        setRefreshLayout(false);
        
	}, [ refreshLayout ])

    useEffect( async () => {
        if(token) {
            try {
                const { data } = await userLogged(id, token);
                switch (data.role) {
                    case 1:
                        setRole('admin');
                        break;
                    case 2:
                        setRole('client');
                        break;
                
                    default:
                        setRole(null);
                        break;
                }
            } catch (err) {
                console.log(err);
            }
            
        }
    }, [token])

    return (
        <Router>
          <RouterWithSubroutes
            isAuth={ isAuth }
            role={ role }
            setRefreshLayout={ setRefreshLayout }
          />
        </Router>
    );
} 

function RouterWithSubroutes({ isAuth, role, setRefreshLayout }) {

    return (
        <Routes>
            { listroutes.map((route, index) => (
                <Route 
                    key={ index }
                    path={ route.path }
                    exact={ route.exact }
                    element={ 
                        <route.element 
                            routes={route.routes} 
                            isAuth={ isAuth }
                            role={ role }
                            setRefreshLayout={ setRefreshLayout }
                        /> }
                />
            ))}
        </Routes>
    );
}