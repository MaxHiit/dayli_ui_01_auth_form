import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => console.log(data);

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

export default LoginForm;
