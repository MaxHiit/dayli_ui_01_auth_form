import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const SignUpForm = () => {
	const { signUp } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = async (data) => {
		await signUp(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				className='signup-email'
				type='email'
				name='email'
				placeholder='Your Email'
				{...register('email', { required: true })}
			/>
			{/* {errors.email?.type === 'required' && 'First name is required'} */}
			<input
				className='signup-name'
				type='text'
				name='name'
				placeholder='Your Name'
				{...register('name', { required: true })}
			/>
			<input
				className='signup-password'
				type='text'
				name='password'
				placeholder='Your Password'
				{...register('password', { required: true })}
			/>
			<input type='submit' />
		</form>
	);
};

export default SignUpForm;
