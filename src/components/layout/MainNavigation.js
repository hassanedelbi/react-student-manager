import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Student Manager</div>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Students</Link>
					</li>
					<li>
						<Link to={'/new-student'}>New Student</Link>
					</li>
					<li>
						<Link to={'/courses'}>Courses</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
