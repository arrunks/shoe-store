import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CREATE_USER = gql`
	mutation register($type: UserInput!) {
		register(input: $type) {
			jwt
		}
	}
`;

const Signup = (props) => {
	const router = useRouter();
	const [name, setName] = useState();
	const [password, setPassword] = useState();
	const [passwordSecond, setPasswordSecond] = useState();
	const [email, setEmail] = useState();

	const [register, { loading, error }] = useMutation(CREATE_USER, {
		onCompleted({ register }) {
			document.cookie = `jwt=${register.jwt}; path=/`;
			router.push('/');
		},
	});

	if (loading) {
		NProgress.start();
	}

	if (error) {
		NProgress.stop();
	}

	const onFormSubmit = async (e) => {
		e.preventDefault();
		const opts = {
			username: name,
			email,
			password,
		};
		register({ variables: { type: { ...opts } } });
	};

	return (
		<div className='form-wrapper'>
			<Form onSubmit={onFormSubmit}>
				<FormGroup>
					<Label for='name'>Name</Label>
					<Input
						type='text'
						name='name'
						id='name'
						onChange={(e) => setName(e.target.value)}
						placeholder='Enter Name'
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
				<FormGroup>
					<Label for='password2'>Re-enter Password</Label>
					<Input
						type='password'
						name='password2'
						id='password2'
						onChange={(e) => setPasswordSecond(e.target.value)}
						placeholder='Enter Password Again'
					/>
				</FormGroup>
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
				<Button>Submit</Button>
				{error && <p>Something Went Wrong !</p>}
			</Form>
		</div>
	);
};

export default withAuth(withLayout(Signup), { logoutRequired: true });
