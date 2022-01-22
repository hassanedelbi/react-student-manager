import React from 'react';
import StudentList from '../components/students/StudentList';

const AllStudentsPage = () => {
	const students = [
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
	return (
		<div>
			All Students
			<StudentList students={students} />
		</div>
	);
};

export default AllStudentsPage;
