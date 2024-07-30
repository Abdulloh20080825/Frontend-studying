import { dataLang } from '../constants/data';
import LangDatas from './langDatas';

const Main = () => {
	return (
		<div className='flex justify-center'>
			<div className='bg-slate-400 h-[100vh] w-[100%] '>
				<p className='text-3xl text-center mt-10'>
					Project to be a Advenced Frontend development
				</p>
				<div className='flex flex-col space-y-10 w-[50%] mx-auto text-center mt-10'>
					{dataLang.map((item, index) => (
						<LangDatas item={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Main;
