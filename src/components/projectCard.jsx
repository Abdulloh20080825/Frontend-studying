const ProjectCard = ({ item }) => {
	return (
		<div className='text-start h-[90%] flex space-x-5 rounded-lg shadow-lg mb-20'>
			<div className='w-[60%] p-6 bg-gray-100 rounded-l-lg relative  overflow-scroll'>
				<p className='absolute bg-slate-300 p-2 rounded-xl'>
					{item.projectNumber}
				</p>
				<p className='text-3xl text-center my-10 text-gray-800'>{item.title}</p>
				<div className='flex space-x-5'>
					<div className='w-[50%]'>
						<p className='font-bold text-2xl'>Intro: </p>
						<p className='capitalize text-xl text-gray-600 mb-5'>
							{item.intro}
						</p>
					</div>
					<div className='w-[50%] bg-gray-900 rounded-lg px-2 py-2'>
						<code>
							<pre className='text-orange-400'>{item.introCode}</pre>
						</code>
					</div>
				</div>
				<p className='text-2xl font-bold'>Description: </p>
				<p className='capitalize text-xl text-gray-600 mb-10'>
					{item.description}
				</p>
				<p className='text-2xl font-bold'>Usage: </p>
				<div className='flex space-x-5'>
					<p className='text-xl w-[50%]'>
						If you are using visual studion code you must first download the
						node Js application then write this code and enter this code into
						the terminal
					</p>
					<div className='bg-gray-900 w-[50%] rounded-lg px-5 py-1'>
						<p className='text-white '>Terminal</p>
						<div>
							<code className='text-white'>
								node <span className='text-orange-400'>index.js</span>
							</code>
						</div>
					</div>
				</div>
				<div className='mt-10 justify-end flex'>
					<a
						href='https://t.me/a_qurbobov1'
						className='bg-black text-white rounded-lg p-2'
					>
						Send Code
					</a>
				</div>
			</div>
			<div className='bg-gray-800 w-[40%] rounded-r-lg pt-4'>
				<pre>
					<code className='text-white p-6'>{item.code}</code>
				</pre>
			</div>
		</div>
	);
};

export default ProjectCard;
