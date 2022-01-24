import Course from '../courses/CourseItem';
import Card from '../ui/Card';
const Student = (props) => {
	let coursesHtml = '';
	if (props.courses[0] === '0') {
		coursesHtml = 'No Registered Courses';
	} else {
		coursesHtml = props.courses.map((courseId) => (
			<Course key={courseId} id={courseId} studentId={props.id} />
		));
	}

	return (
		<li>
			<Card>
				<h3>{props.name}</h3>
				<h4>{props.email}</h4>
				<h4>Courses:</h4>
				{coursesHtml}
			</Card>
		</li>
	);
};

export default Student;
