import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../../hooks/useForm';
import { registerApi, signinApi } from '../../../api/auth';
import { login } from '../../../actions/auth';
import { error as errorMsg, success as successMsg } from '../../../utils/alerts.js';

export default function Auth({ setRefreshLayout }) {

	const [viewLogin, setViewLogin] = useState(true);

	return (
		<div className='p-12 h-[90vh]'>
			<p className='text-xl font-black text-emerald-500'>
				Login
			</p>

			{
				(viewLogin) ? 
					<Login 
						setViewLogin={ setViewLogin }
						useForm={ useForm }
						errorMsg={ errorMsg }
						successMsg={ successMsg }
						setRefreshLayout={ setRefreshLayout }
					/> : 
					<Register 
						setViewLogin={ setViewLogin }
						useForm={ useForm }
						registerApi={ registerApi }
						errorMsg={ errorMsg }
						successMsg={ successMsg }
					/>
			}
			
		</div>
	)
}

function Login({ setViewLogin, useForm, errorMsg, successMsg, setRefreshLayout }) {

	const dispatch = useDispatch();

	const [ formValues, handleInputChange ] = useForm({
		email: '',
		password: ''
	});

	const signin = async (e) => {
		e.preventDefault();

		try {
			const response = await signinApi( formValues );

			if(response.success) {
				dispatch( login(response.token) );
				successMsg(response.message);
				setRefreshLayout(true);
				return;
			}

			errorMsg(response.message);

		} catch (error) {
			console.log(error);
			errorMsg(error)
		}

	}

	return(
		<div className='w-80 mx-auto my-8 py-4 px-8 border-2 border-emerald-200'>
				<form onSubmit={ signin }>
					<div className='font-bold text-md py-4'>
						<label className='block py-2' >Email</label>
						<input 
							className='input-control' 
							type='email'
							name='email'
							onChange={ handleInputChange }
							required
						/>
					</div>
					<div className='font-bold text-md py-4'>
						<label className='block py-2' >Password</label>
						<input 
							className='input-control' 
							type='password' 
							name='password'
							onChange={ handleInputChange }
							required
						/>
					</div>
					<div>
						<span>Without account?</span> &nbsp;
						<a onClick={ () => setViewLogin( val => !val ) }>Register!</a>
					</div>
					<div className='mb-12'>
						<button type='submit' className='btn-success w-full mt-4'>
							Login
						</button>
					</div>
				</form>
			</div>
	);
}

function Register({ setViewLogin, useForm, registerApi, errorMsg, successMsg }) {

	const [ formValues, handleInputChange, reset ] = useForm({
		email: '',
		firstname: '',
		lastname: '',
		password: '',
	});

	const { email, firstname, lastname, password } = formValues;

	const signup = async (e) => {
		e.preventDefault();
		console.log(formValues);
		
		try {
			const response = await registerApi(formValues)
			if(response.success) {
				successMsg(response.message)
			}

		} catch (error) {
			console.log(error);
			errorMsg(error);
		} finally {
			reset();
		}
	}

	return(
		<div className='w-80 mx-auto my-8 py-4 px-8 border-2 border-emerald-200'>
			<form onSubmit={ signup }>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Email</label>
					<input 
						className='input-control' 
						placeholder='Email' 
						type='email'
						name='email'
						onChange={ handleInputChange }
						value={ email }
						required
					/>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Firstname</label>
					<input 
						className='input-control' 
						placeholder='Firstname'
						type='text' 
						name='firstname'
						onChange={ handleInputChange }
						value={ firstname }
						required
					/>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Lastname</label>
					<input 
						className='input-control' 
						placeholder='Lastname' 
						type='text' 
						name='lastname'
						onChange={ handleInputChange }
						value={ lastname }
						required
					/>
				</div>
				<div className='font-bold text-md py-4'>
					<label className='block py-2' >Password</label>
					<input 
						className='input-control' 
						placeholder='Password' 
						type='password'
						name='password'
						onChange={ handleInputChange }
						value={ password }
						required
					/>
				</div>
				<div>
					<a onClick={ () => setViewLogin(val => !val) }> go back</a>
				</div>
				<div className='mb-12'>
					<button 
						className='btn-success w-full mt-4'
					>
						register me
					</button>
				</div>
			</form>
		</div>
	);
}