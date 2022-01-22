import Student from './Student';
import classes from './StudentList.module.css';
const StudentList = (props) => {
	return (
		<ul className={classes.list}>
			{props.students.map((student) => (
				<Student key={student.id} id={student.id} email={student.email} />
			))}
		</ul>
	);
};

export default StudentList;
