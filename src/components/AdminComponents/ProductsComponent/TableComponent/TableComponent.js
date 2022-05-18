import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { deleteProductsApi } from '../../../../api/products';
import { success as SuccessMsg } from '../../../../utils/alerts';

export default function TableComponent({ index, products }) {

	const { token } = useSelector(state => state.auth)
	const navigate = useNavigate();

	const edit = ( id ) => {
		navigate(`/admin/product/${id}/edit`);
	}

	const destroy = async ( id ) => {
		try {
			const res = await deleteProductsApi( id, token );

			if(res.success) {
				SuccessMsg(res.message);
				index();
			}

		} catch (err) {
			console.log(err);	
		}
	}

	const columns = [
		{
			title: '#',
			dataIndex: 'index',
			key: 'index',
			render: (text, records, i) => {
				return `${ i + 1 }`;
			}
		},
		{
			title: 'Product name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			render: (price) => {
				return `$ ${price}`
			}
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			render: (category) => {
				return `${category?.name}`
			}
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description'
		},
		{
			title: 'actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (text, records) => {
				return (
					<div>
						<button 
							className='text-orange-500'
							onClick={ () => edit(records.id) }
						> 
							Edit
						</button> &nbsp;
						<button 
							className='text-red-500'
							onClick={ () => destroy(records.id) }
						> 
							Delete 
						</button>
					</div>
				);
			}
		}
	];

	useEffect(() => {
		index();
	}, [])

	return (
		<div>
			<Table
				dataSource={ products } 
				columns={ columns } 
				pagination={{ defaultPageSize: 5 }}
				rowKey="id"
			/>
		</div>
	)
}
