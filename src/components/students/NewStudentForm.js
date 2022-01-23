import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewStudentForm.module.css';
const NewStudentForm = (props) => {
	const nameInputRef = useRef();
	const emailInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;
		const enteredCourses = ['0'];
		const studentData = {
			name: enteredName,
			email: enteredEmail,
			courses: enteredCourses,
		};
		props.onAddStudent(studentData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.title}>New Student</div>
				<div className={classes.control}>
					<label htmlFor='name'> Student Name</label>
					<input type='name' required id='name' ref={nameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='email'>Email</label>
					<input type='email' required id='email' ref={emailInputRef} />
				</div>
				<div className={classes.actions}>
					<button>Add Student</button>
				</div>
			</form>
		</Card>
	);
};

export default NewStudentForm;
