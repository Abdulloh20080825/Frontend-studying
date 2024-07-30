import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import IntrodactionJavascript from './pages/projects/IntrodactionJavascript';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route
				path='/introdaction-javascript'
				element={<IntrodactionJavascript />}
			/>
		</Routes>
	);
};

export default App;
