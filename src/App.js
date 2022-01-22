import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllStudentsPage from './pages/AllStudents';
import NewStudentPage from './pages/NewStudent';
import AllCoursesPage from './pages/AllCourses';
import NotFoundPage from './pages/NotFound';
function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<AllStudentsPage />} />
				<Route path='/new-student' element={<NewStudentPage />} />
				<Route path='/courses' element={<AllCoursesPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
