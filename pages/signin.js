import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';

import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const LOGIN = gql`
	mutation login($input: UsersPermissionsLoginInput!) {
		login(input: $input) {
			jwt
		}
	}
`;

const Signin = (props) => {
	const router = useRouter();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [login, { loading, error }] = useMutation(LOGIN, {
		onCompleted({ login }) {
			const { jwt } = login;
			if (jwt) {
				document.cookie = `jwt=${jwt}; path=/`;
				router.push('/');
			}
		},
	});

	if (loading) {
		NProgress.start();
	}

	if (error) {
		NProgress.stop();
	}

	const submitForm = async (e) => {
		e.preventDefault();
		const opts = {
			identifier: email,
			password,
		};
		login({ variables: { input: { ...opts } } });
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
				{error && <p>Incorrect Email/Password.</p>}
				<Button>Submit</Button>
			</Form>
		</div>
	);
};

export default withAuth(withLayout(Signin), { logoutRequired: true });
