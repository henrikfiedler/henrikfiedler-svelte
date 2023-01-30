<script lang="ts">
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
	import '../app.scss';
	// import 'bootstrap/dist/js/bootstrap.bundle';
	// import 'bootstrap';

	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	let year = new Date();

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
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;
</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">sveltestrap</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={() => (isOpen = !isOpen)}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="#components/">Components</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
			</NavItem>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>Options</DropdownToggle>
				<DropdownMenu end>
					<DropdownItem>Option 1</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</Nav>
	</Collapse>
</Navbar>

<!-- <header>
	<nav id="nav" class="navbar navbar-expand navbar-dark fixed-top">
		<div class="container">
			<a class="navbar-brand" href="/">
				<img
					src="/images/logo/logo.png"
					width="30"
					height="30"
					class="d-inline-block align-top rounded"
					alt="Logo"
					loading="lazy"
				/>
				Henrik Fiedler
			</a>
		</div>
	</nav>
</header> -->

<main class="flex-grow-1">
	<slot />
</main>

<footer class="footer bg-dark text-white py-2">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h1 class="h5">Henrik Fiedler</h1>
				<ul class="list-unstyled text-muted">
					<li>
						<span class="text-white">
							{year.toLocaleDateString(undefined, { year: 'numeric' })}
						</span>
						<span class="text-white"> | </span>
						<a class="text-decoration-none" href="/impressum">Impressum</a>
					</li>
				</ul>
			</div>
			<div class="col-md-6">
				<h1 class="h5">Kontakt</h1>
				<ul class="list-unstyled">
					<li>
						<a class="text-decoration-none" href="mailto:henrik@henrikfiedler.de">
							<Fa icon={faEnvelope} />
							<span>henrik@henrikfiedler.de</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
