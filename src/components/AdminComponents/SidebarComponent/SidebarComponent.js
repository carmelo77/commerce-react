import React from 'react';
import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function SidebarComponent({ children, showSidebar, showSidebarMobile }) {

	return (
		<>
			<aside className={ showSidebar ? 'bg-black sm:hidden md:block' : 'bg-black sm:hidden' }>
				<div className="p-20 text-center">
					<a href="" className="text-white text-center text-2xl font-semibold hover:text-gray-300">
						Admin
					</a>
				</div>
				<nav className="text-white text-base font-semibold pt-3">
						<Link to="/admin/dashboard" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
							Dashboard
						</Link>
						<Link to="/admin/products" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
								Products
						</Link>
						<Link to="/admin/categories" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
								Categories
						</Link>
						<a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
								Users
						</a>
						<a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
								Sellers
						</a>
						{/* <a href="" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
							<DashboardOutlined className='mx-2' />
								Support
						</a> */}
				</nav>
			</aside>

			<div className="w-full flex flex-col h-screen overflow-y-hidden">
        <header 
					id="sidebarMobile" 
					className={showSidebarMobile ? "w-full py-5 px-6 md:hidden bg-black" : "w-full py-5 px-6 sm:hidden"}
				>
            <nav className="text-white text-base font-semibold">
							<Link to="/admin/dashboard" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
								<DashboardOutlined className='mx-2' />
								Dashboard
							</Link>
							<Link to="/admin/products" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
								<DashboardOutlined className='mx-2' />
									Products
							</Link>
							<Link to="/admin/categories" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
								<DashboardOutlined className='mx-2' />
									Categories
							</Link>
              <a href="" className="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                  <i className="fas fa-tablet-alt mr-3"></i>
                  Users
              </a>
              <a href="" className="block text-white opacity-75 hover:opacity-100 py-4 pl-6">
                  <i className="fas fa-calendar mr-3"></i>
                  Sellers
              </a>
            </nav>
        </header>

        <div className="w-full overflow-x-hidden border-t flex flex-col">
					<main className="w-full flex-grow p-6">
						{ children }
					</main>
        </div>

      </div>
		</>
	)
}
