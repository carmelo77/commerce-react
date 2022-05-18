import React from 'react';

export default function ContentComponent() {
	return (
		<div className='content'>

			<div className='bg-content-image w-full pt-[1px] bg-cover bg-no-repeat py-72'>
				<div className='text-center font-black md:text-5xl sm:text-2xl my-36'>
					<span>Best Sales!</span>
				</div>
				<div className='btn-actions text-center flex md:flex-row sm:flex-col justify-center items-center gap-3'>
					<a href='#' className='btn-success'>Buy</a>
					<a href='#' className='btn-info-outlined'>About us</a>
				</div>
			</div>

			<About />

			<Pricing />

		</div>
	)
}

function About() {
	return (
		<div className='about pt-5'>
			<p className='text-2xl font-bold text-emerald-600 pl-5 py-6'>About us</p>
			<div className='w-9/12 flex flex-wrap mx-auto justify-between items-center px-22 py-5'>
				<div className='circle-about'>
					<p className='text-xl font-bold py-4'>
						ICON
					</p>
					<p className='text-sm text-slate-500'>Awesome site!</p>
				</div>

				<div className='circle-about'>
					<p className='text-xl font-bold py-4'>
						ICON
					</p>
					<p className='text-sm text-slate-500'>Awesome site!</p>
				</div>

				<div className='circle-about'>
					<p className='text-xl font-bold py-4'>
						ICON
					</p>
					<p className='text-sm text-slate-500'>Awesome site!</p>
				</div>
			</div>
		</div>
	);
}

function Pricing() {
	return (
		<div className='pricing'>
			<p className='text-2xl font-bold text-emerald-600 pl-5 py-6'>Pricing</p>
			<div className='w-11/12 flex flex-wrap mx-auto justify-between items-center px-12 py-5'>
				<div className='text-center my-4 md:w-[27%] border-2 border-stone-800 rounded-sm h-[28rem] sm:w-full'>
					<div className='text-2xl bg-red-500 font-black text-white py-4'>
						Ultimate
					</div>
					<div className='text-2xl bg-stone-800 font-black text-white py-4'>
						$700
					</div>
					<ul className='text-sm w-3/6 mx-auto text-gray-500 text-center py-6 list-disc'>
						<li className='py-2 font-bold'>Economic</li>
						<li className='py-2 font-bold'>Access to courses</li>
						<li className='py-2 font-bold'>Fast Buy</li>
						<li className='py-2 font-bold'>View list</li>
					</ul>
					<div className='btn-pricing py-10 flex justify-around'>
						<span className='font-black text-gray-600 text-md'>
							$700 
							<sup className='text-md'>
								/USD
							</sup>
						</span>
						<a href='#' className='btn-indigo'>View</a>
					</div>
				</div>

				<div className='text-center my-4 md:w-[27%] border-2 border-black rounded-sm h-[28rem] sm:w-full'>
					<div className='text-2xl bg-indigo-500 font-black text-white py-4'>
						Premium
					</div>
					<div className='text-2xl bg-stone-800 font-black text-white py-6'>
						$500
					</div>
					<ul className='text-sm w-3/6 mx-auto text-gray-500 text-center py-4 list-disc'>
						<li className='py-2 font-bold'>Economic</li>
						<li className='py-2 font-bold'>Access to courses</li>
						<li className='py-2 font-bold'>Fast Buy</li>
						<li className='py-2 font-bold'>View list</li>
					</ul>
					<div className='btn-pricing py-10 flex justify-around'>
						<span className='font-black text-gray-600 text-md'>
							$700 
							<sup className='text-md'>
								/USD
							</sup>
						</span>
						<a href='#' className='btn-indigo'>View</a>
					</div>
				</div>

				<div className='text-center my-4 md:w-[27%] border-2 border-black rounded-sm h-[28rem] sm:w-full'>
					<div className='text-2xl bg-emerald-500 font-black text-white py-4'>
						Basic
					</div>
					<div className='text-2xl bg-stone-800 font-black text-white py-6'>
						$300
					</div>
					<ul className='text-sm w-3/6 mx-auto text-gray-500 text-center py-4 list-disc'>
						<li className='py-2 font-bold'>Economic</li>
						<li className='py-2 font-bold'>Access to courses</li>
						<li className='py-2 font-bold'>Fast Buy</li>
						<li className='py-2 font-bold'>View list</li>
					</ul>
					<div className='btn-pricing py-10 flex justify-around'>
						<span className='font-black text-gray-600 text-md'>
							$700 
							<sup className='text-md'>
								/USD
							</sup>
						</span>
						<a href='#' className='btn-indigo'>View</a>
					</div>
				</div>
			</div>
		</div>
	);
}