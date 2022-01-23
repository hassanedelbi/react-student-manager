import React, { useEffect, useState } from 'react';
import StudentList from '../components/students/StudentList';

const AllStudentsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedStudents, setLoadedStudents] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-student-manager-default-rtdb.firebaseio.com/students.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const students = [];
				for (const key in data) {
					const student = {
						id: key,
						...data[key],
					};
					students.push(student);
				}
				setLoadedStudents(students);
				setIsLoading(false);
			});
	}, []);

	const students_DUMMY = [
		{
			id: '1',
			name: 'Name1',
			email: 'email1@test.com',
			courses: ['1', '3'],
		},
		{
			id: '2',
			name: 'Name2',
			email: 'email2@test.com',
			courses: ['2'],
		},
		{
			id: '3',
			name: 'Name3',
			email: 'email3@test.com',
			courses: ['3'],
		},
	];

	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}
	return (
		<section>
			<StudentList students={loadedStudents} />
		</section>
	);
};

export default AllStudentsPage;
