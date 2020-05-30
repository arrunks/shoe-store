import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import qs from 'querystring';
import { useRouter } from 'next/router';
import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

const Signin = (props) => {
	const router = useRouter();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitForm = async (e) => {
		e.preventDefault();
		const opts = {
			identifier: email,
			password,
		};
		const res = await fetch(`${process.env.backendUrl}/auth/local`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body: qs.stringify(opts),
		});
		const response = await res.json();
		document.cookie = `jwt=${response.jwt}; path=/`;
		router.push('/');
	};

	return (
		<div className='form-wrapper'>
			<Form onSubmit={submitForm}>
				<FormGroup>
					<Label for='Email'>Email</Label>
					<Input
						type='email'
						name='email'
						id='email'
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Enter Email'
					/>
				</FormGroup>
				<FormGroup>
					<Label for='password1'>Password</Label>
					<Input
						type='password'
						name='password'
						id='password1'
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Enter Password'
					/>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		</div>
	);
};

export default withAuth(withLayout(Signin), { logoutRequired: true });
