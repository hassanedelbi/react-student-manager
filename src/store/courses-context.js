import { createContext, useState } from 'react';

const CoursesContext = createContext({
	courses: [],
	totalCourses: 0,
	removeCourseFromStudent: (courseId, studentId) => {
		console.log('mishkil');
	},
});

export const CoursesContextProvider = (props) => {
	const [allcourses, setAllCourses] = useState([]);

	function removeCourseFromStudentHandler(courseId, studentId) {
		console.log('start context');
		console.log('remove', courseId, 'from', studentId);
	}

	const context = {
		courses: allcourses,
		totalCourses: allcourses.length,
		removeCourseFromStudent: removeCourseFromStudentHandler,
	};

	return (
		<CoursesContext.Provider value={context}>
			{props.children}
		</CoursesContext.Provider>
	);
};

export default CoursesContext;
