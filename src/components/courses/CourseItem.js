import React, { useContext } from 'react';
import CoursesContext from '../../store/courses-context';

const Course = (props) => {
	const coursesCtx = useContext(CoursesContext);
	let html = '';
	const courses = [
		{
			id: '1',
			name: 'course1',
		},
		{
			id: '2',
			name: 'course2',
		},
		{
			id: '3',
			name: 'course3',
		},
	];

	function getCourseById(courseId) {
		if (courseId === '0') return 'No Courses Yet';
		else {
			let a = courses.find((course) => course.id === courseId);
			return a.name;
		}
	}

	function deleteMe(courseId, studentId) {
		console.log('course id is', courseId, 'student id', studentId);
		coursesCtx.removeCourseFromStudent(courseId, studentId);
		console.log('end context');
	}

	return (
		<>
			{getCourseById(props.id)}
			<button
				onClick={() => {
					deleteMe(props.id, props.studentId);
				}}
			>
				x
			</button>
		</>
	);
};
export default Course;
