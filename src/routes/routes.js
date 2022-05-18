/** Layouts */
import LayoutWeb from '../views/Web';
import LayoutAdmin from '../views/Admin';

/** Pages */
import HomePage from '../views/Web/Home';
import ProductsPage from '../views/Web/Products/Products';
import ProductDetailPage from '../views/Web/ProductDetail';
import Cart from '../views/Web/Cart';
import AuthPage from '../views/Web/Auth';
import page404 from '../views/Web/404';

/** Dashboard page */
import DashboardPage from '../views/Admin/Dashboard';
import Products from '../views/Admin/Products/ListProducts';
import CreateProduct from '../views/Admin/Products/CreateProduct';
import EditProduct from '../views/Admin/Products/EditProduct';
import Categories from '../views/Admin/Categories/List';
import CreateCategory from '../views/Admin/Categories/Form';
import EditCategory from '../views/Admin/Categories/FormEdit';

const routes = [
    {
        path: '*',
        element: LayoutWeb,
        exact: false,
        routes: [
            {
                path: '/',
                element: HomePage,
                exact: true
            },
            {
                path: '/products',
                element: ProductsPage,
                exact: true
            },
            {
                path: '/product-detail/:id',
                element: ProductDetailPage,
                exact: true
            },
            {
                path: '/cart',
                element: Cart,
                exact: true
            },
            {
                path: '/login',
                element: AuthPage,
                exact: true
            },
            {
                path: '*',
                element: page404,
                exact: true
            }
        ],
    },
    {
        path: '/admin/*',
        element: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/dashboard',
                element: DashboardPage,
                exact: true,
                meta: [
                    'admin',
                    'client'
                ]
            },
            {
                path: '/products',
                element: Products,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '/products/create',
                element: CreateProduct,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '/product/:id/edit',
                element: EditProduct,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '/categories',
                element: Categories,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '/categories/create',
                element: CreateCategory,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '/category/:id/edit',
                element: EditCategory,
                exact: true,
                meta: [
                    'admin',
                ]
            },
            {
                path: '*',
                element: page404,
                exact: true,
                meta: [
                    'admin',
                    'client'
                ]
            }
        ]
    }
];

export default routes;