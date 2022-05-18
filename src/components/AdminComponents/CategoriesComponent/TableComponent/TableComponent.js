import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';

import { destroyCategoryApi } from '../../../../api/category';
import { success as SuccessMsg } from '../../../../utils/alerts';

export default function TableComponent({ index, categories }) {

	const navigate = useNavigate();

	const edit = ( id ) => {
		navigate(`/admin/category/${id}/edit`);
	}

	const destroy = async ( id ) => {
		try {
			const res = await destroyCategoryApi( id );

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
			title: 'Category name',
			dataIndex: 'name',
			key: 'name',
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
				dataSource={ categories } 
				columns={ columns } 
				pagination={{ defaultPageSize: 5 }}
				rowKey="id"
			/>
		</div>
	)
}
