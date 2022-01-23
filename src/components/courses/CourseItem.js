import React from 'react';

const Course = (props) => {
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
	return <h4>{getCourseById(props.id)}</h4>;
};
export default Course;
