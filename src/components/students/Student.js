import Card from '../ui/Card';
const Student = (props) => {
	return (
		<li>
			<Card>
				<h3>Full Name{props.name}</h3>
				<h4>Email{props.email}</h4>
			</Card>
		</li>
	);
};

export default Student;
