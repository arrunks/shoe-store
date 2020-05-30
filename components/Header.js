import React, { useState, useContext } from 'react';
import cookies from 'next-cookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Button,
	Badge,
} from 'reactstrap';

import { AppContext } from '../lib/AppContext';

const Header = () => {
	const { globalStore } = useContext(AppContext);

	const { user, cart } = globalStore;

	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

	const toggle = () => setIsOpen(!isOpen);

	const doLogout = () => {
		document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
		router.reload('/');
	};

	const goToOrders = () => {
		router.push('/orders');
	};

	const cartCount = cart.length > 0 ? `${cart.length}` : '0';

	return (
		<div className='navbar-container'>
			<Navbar expand='md'>
				<NavbarBrand href='/'>Shoe Store</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<Link href='/cart'>
								<Button className='mr-2'>
									Cart <Badge color='secondary'>{cartCount}</Badge>
								</Button>
							</Link>
						</NavItem>
						{user && (
							<React.Fragment>
								<NavItem>
									<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
										<DropdownToggle caret>{user.username}</DropdownToggle>
										<DropdownMenu>
											<DropdownItem onClick={doLogout}>Logout</DropdownItem>
											<DropdownItem onClick={goToOrders}>Orders</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</NavItem>
							</React.Fragment>
						)}

						{!user && (
							<React.Fragment>
								<NavItem>
									<Link href='/signin'>
										<Button className='mr-2'>Sign in</Button>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/signup'>
										<Button>Sign up</Button>
									</Link>
								</NavItem>
							</React.Fragment>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
