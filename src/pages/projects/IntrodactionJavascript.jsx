import { projectsData } from '../../constants/projectsData';
import ProjectCard from '../../components/projectCard';

const IntrodactionJavascript = () => {
	return (
		<div className='bg-slate-500 flex h-[100vh] overflow-scroll p-10'>
			<div>
				{projectsData.map((item, index) => (
					<ProjectCard item={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default IntrodactionJavascript;
