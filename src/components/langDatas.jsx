import { Link } from 'react-router-dom';

const LangDatas = ({ item }) => {
	return (
		<Link to={item.query}>
			<div className='p-5 border-2 border-slate-800 rounded-2xl cursor-pointer bg-sky-200'>
				<p className='text-2xl my-5 text-red-500 font-semibold'>{item.level}</p>
				<p className='font-bold text-lg'>{item.description}</p>
			</div>
		</Link>
	);
};

export default LangDatas;
