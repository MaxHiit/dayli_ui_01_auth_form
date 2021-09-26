import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import routes from '../config/routes';

const DashboardPage = () => {
	const { user } = useAuth();
	console.log(user);

	{
		!user && (
			<div>
				Your are not logged !
				<Link href={routes.login} passHref>
					<button>Please Login</button>
				</Link>
			</div>
		);
	}

	return (
		<div>
			<h1>Congrats your are Logged</h1>
			{/* <h2>{`Welcolme ${user.name}`}</h2>
			<p>{`Your email is : ${user.eamil}`}</p> */}
		</div>
	);
};

export default DashboardPage;
