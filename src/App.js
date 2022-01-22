import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllStudentsPage from './pages/AllCourses';
import NewStudentPage from './pages/NewStudent';
import AllCoursesPage from './pages/AllCourses';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<AllStudentsPage />} />
				<Route path='/new-student' element={<NewStudentPage />} />
				<Route path='/courses' element={<AllCoursesPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
