import Course from '../courses/CourseItem';
import Card from '../ui/Card';
const Student = (props) => {
	return (
		<li>
			<Card>
				<h3>{props.name}</h3>
				<h4>{props.email}</h4>
				<h4>Courses:</h4>
				{}
				{console.log(props.courses[0])}
				{props.courses.map((courseId) => (
					<Course key={courseId} id={courseId} />
				))}
			</Card>
		</li>
	);
};

export default Student;
