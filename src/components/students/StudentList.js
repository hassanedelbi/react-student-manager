import Student from './Student';
import classes from './StudentList.module.css';

const StudentList = (props) => {
	return (
		<ul className={classes.list}>
			{props.students.map((student) => (
				<Student
					key={student.id}
					id={student.id}
					name={student.name}
					email={student.email}
					courses={student.courses}
				/>
			))}
		</ul>
	);
};

export default StudentList;
