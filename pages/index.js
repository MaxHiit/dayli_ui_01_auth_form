import Link from 'next/link';
import { firebase } from '../firebase/firebaseClient';
import SignUpBtn from '../src/components/SignUpBtn';
import SignUpForm from '../src/components/SignUpForm';

export default function Home() {
	return (
		<div>
			<h1>Create Account</h1>
			<SignUpBtn />
			<p>- OR -</p>
			<SignUpForm />
			<p>
				Already have account? <Link href='/login'>Login</Link>
			</p>
		</div>
	);
}
