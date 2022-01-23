import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewStudentForm from '../components/students/NewStudentForm';

const NewStudentPage = () => {
	const navigate = useNavigate();
	function addStudentHandler(studentData) {
		fetch(
			'https://react-student-manager-default-rtdb.firebaseio.com/students.json',
			{
				method: 'POST',
				body: JSON.stringify(studentData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			// navigate('/');
		});
	}

	return (
		<div>
			<NewStudentForm onAddStudent={addStudentHandler} />
		</div>
	);
};

export default NewStudentPage;
