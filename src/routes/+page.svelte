<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faAngleDown,
		faDatabase,
		faEnvelope,
		faGlobe,
		type IconDefinition
	} from '@fortawesome/free-solid-svg-icons';
	import {
		faHtml5,
		faAngular,
		faCss3,
		faJsSquare,
		faNode,
		faPhp,
		faWordpress,
		faApple,
		faAppStoreIos,
		faSwift,
		faFacebook,
		faTwitter,
		faInstagram,
		faMicrosoft
	} from '@fortawesome/free-brands-svg-icons';

	let workareas: Workarea[] = [
		{
			id: 1,
			title: 'SAP',
			description: `Als hauptberuflicher SAP Berater stellt der Umgang mit dem System, die Prozessberatung
							und die Entwicklung mit der Programmiersprache ABAP meine wohl größte Stärke dar.<br/>
							Die Zufriedenheit der Kunden steht hierbei an oberster Stelle.<br />
							Zu meinen Spezialgebieten gehören: Entwicklung von Formularen (Adobe Forms), Berechtigungskonzepte
							für Fiori in S/4HANA.`,
			icons: [],
			isOpen: false
		},
		{
			id: 2,
			title: 'Frontend',
			description: `lorem ipsum`,
			icons: [faHtml5, faCss3, faJsSquare, faAngular],
			isOpen: false
		},
		{
			id: 3,
			title: 'Backend',
			description: `lorem ipsum`,
			icons: [faNode],
			isOpen: false
		},
		{
			id: 4,
			title: 'PHP',
			description: `lorem ipsum`,
			icons: [faPhp],
			isOpen: false
		},
		{
			id: 5,
			title: 'CMS',
			description: `lorem ipsum`,
			icons: [faWordpress],
			isOpen: false
		},
		{
			id: 6,
			title: 'Datenbanken',
			description: `lorem ipsum`,
			icons: [faDatabase],
			isOpen: false
		},
		{
			id: 7,
			title: 'Mobile',
			description: `lorem ipsum`,
			icons: [faAppStoreIos, faSwift],
			isOpen: false
		},
		{
			id: 8,
			title: 'Social Media',
			description: `lorem ipsum`,
			icons: [faFacebook, faTwitter, faInstagram],
			isOpen: false
		},
		{
			id: 9,
			title: 'EDV',
			description: `lorem ipsum`,
			icons: [faApple, faMicrosoft],
			isOpen: false
		}
	];

	interface Workarea {
		id: number;
		title: string;
		description: string;
		icons: IconDefinition[];
		isOpen: boolean;
	}
</script>

<svelte:head>
	<title>Henrik Fiedler</title>
</svelte:head>

<section class="container-fluid py-5 d-flex align-items-center" id="container1">
	<div class="container">
		<div class="card p-5">
			<h1 class="display-4 glitch title">
				<span aria-hidden="true">Henrik Fiedler</span>
				Henrik Fiedler
				<span aria-hidden="true">Henrik Fiedler</span>
			</h1>
			<hr />
			<h2 class="lead glitch subtitle">
				<span class="subtitle1" aria-hidden="true">Consultant.</span>
				<span class="subtitle1">Consultant.</span>
				<span class="subtitle1" aria-hidden="true">Consultant.</span>
				<span class="subtitle2" aria-hidden="true">Developer.</span>
				<span class="subtitle2">Developer.</span>
				<span class="subtitle2" aria-hidden="true">Developer.</span>
			</h2>
		</div>
	</div>
</section>

<section class="container-fluid" id="vita">
	<div class="timeline-container py-5">
		<div class="timeline">
			<ul>
				<li class="card p-3 mb-5">
					<h3>*1999</h3>
					<p>Schwäbisch Gmünd</p>
				</li>
				<li class="card p-3 mb-5">
					<h3>2009-2017</h3>
					<p>Abitur</p>
					<p>Rechberg-Gymnasium Donzdorf</p>
				</li>
				<li class="card p-3 mb-5">
					<h3>2017-2020</h3>
					<p>
						Bachelor of Science<br />
						Wirtschaftsinformatik
					</p>
					<p>
						DHBW Heidenheim<br />
						Advanced Applications GmbH
					</p>
				</li>
				<li class="card p-3">
					<h3>2021-</h3>
					<p>SAP Consultant Logistics</p>
					<p>Advanced Applications GmbH</p>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- <section class="container-fluid py-5" id="container2">
	<div class="container">
		<h2>Arbeitsgebiete</h2>
		<div class="row text-center g-4 mb-5">
			{#each workareas as workarea}
				<div class="col-12 col-md-6 col-lg-4">
					<div class="card p-4">
						<h3 class="h4">
							{workarea.title}
							<button
								class="btn btn-link position-absolute top-0 end-0"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#info1"
								aria-expanded="false"
								aria-controls="info1"
								aria-label="info1"
								on:click={() => (workarea.isOpen = !workarea.isOpen)}
							>
								<Fa icon={faAngleDown} />
							</button>
						</h3>
						<Collapse isOpen={workarea.isOpen}>
							<p class="small">
								{@html workarea.description}
							</p>
							<p class="text-start" style="font-size: 40px">
								{#if workarea.id > 1}
									{#each workarea.icons as icon, i}
										<Fa {icon} />{#if i < workarea.icons.length - 1}<span>&nbsp;</span>{/if}
									{/each}
								{:else}
									<svg
										fill="#fff"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="40px"
										height="40px"
									>
										<path
											d="M 0 6 L 0 18 L 13 18 L 24 6 Z M 4.199219 9 C 5.898438 9 6.449219 9.398438 6.449219 9.398438 C 6.449219 9.398438 6.148438 10.152344 6 10.550781 C 5.5 10.351563 3.5 10 3.5 10.75 C 3.5 11.050781 3.601563 11.25 5.101563 11.597656 C 5.699219 11.75 6.601563 12.050781 6.800781 12.949219 L 8.351563 9 L 10.097656 9 L 12 13.75 L 12 9 L 14.25 9 C 15.5 9 16.5 10 16.5 11.25 C 16.5 12.5 15.5 13.5 14.25 13.5 L 13.5 13.5 L 13.5 15 L 10.75 15 L 10.449219 14.097656 C 10.097656 14.25 9.699219 14.347656 9.25 14.347656 C 8.800781 14.347656 8.402344 14.25 8.050781 14.097656 L 7.75 15 L 6 15 L 6.25 14.402344 C 5.800781 14.75 5.097656 15 4.199219 15 C 2.550781 15 2 14.550781 2 14.550781 L 2.398438 13.25 C 3.351563 13.851563 5.050781 13.75 5.050781 13.25 C 5.050781 12.75 4.300781 12.699219 3.300781 12.402344 C 2.351563 12.101563 2 11.347656 2 10.699219 C 2 10.050781 2.5 9 4.199219 9 Z M 13.5 10.5 L 13.5 12 L 14.25 12 C 14.648438 12 15 11.648438 15 11.25 C 15 10.851563 14.648438 10.5 14.25 10.5 Z M 9.25 10.699219 L 8.5 12.847656 C 8.699219 13 8.949219 13.050781 9.25 13.050781 C 9.550781 13.050781 9.800781 13 10 12.847656 Z"
										/>
									</svg>
								{/if}
							</p>
							<p>
								<button
									class="btn btn-close btn-close-white"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#info1"
									aria-expanded="false"
									aria-controls="info1"
									aria-label="info1"
									on:click={() => (workarea.isOpen = !workarea.isOpen)}
								/>
							</p>
						</Collapse>
					</div>
				</div>
			{/each}

			<div class="text-center">
				<a
					href="mailto:henrik@henrikfiedler.de"
					class="btn btn-lg btn-outline-primary"
					aria-label="Read more about Seminole tax hike"
				>
					<Fa icon={faEnvelope} class="me-1" />
					<span>Kontakt</span>
				</a>
			</div>
		</div>
	</div>
</section> -->

<!-- <section class="container-fluid py-5" id="container3">
	<div class="container">
		<h2>Referenzen</h2>
		<div class="row g-5 text-center mb-5">
			<div class="col-12 col-md-4">
				<div class="card h-100 p-4 d-flex align-items-center justify-content-center">
					<h3 class="h4">BookCourts</h3>
					<ul class="list-inline">
						<li class="list-inline-item">
							<a
								href="https://bookcourts.de"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faGlobe} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a
								href="https://instagram.com/bookcourtsde"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faInstagram} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a
								href="https://twitter.com/bookcourtsde"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faTwitter} size="2x" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card h-100 p-4 d-flex align-items-center justify-content-center">
					<h3 class="h4">TC Donzdorf</h3>
					<ul class="list-inline">
						<li class="list-inline-item">
							<a
								href="https://tc-donzdorf.de"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faGlobe} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a
								href="https://facebook.com/tcdonzdorf"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faFacebook} size="2x" />
							</a>
						</li>
						<li class="list-inline-item">
							<a
								href="https://instagram.com/tcdonzdorf"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faInstagram} size="2x" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card h-100 p-4 d-flex align-items-center justify-content-center">
					<h3 class="h4">Ritter & Schmidt GmbH</h3>
					<h4 class="h5">Seevital</h4>
					<ul class="list-inline">
						<li class="list-inline-item">
							<a
								href="https://seevital.de"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faGlobe} size="2x" />
							</a>
						</li>
					</ul>
					<h4 class="h5">Seehotel Litz</h4>
					<ul class="list-inline">
						<li class="list-inline-item">
							<a
								href="https://hotellitz.de"
								target="_blank"
								rel="noreferrer"
								aria-label="Read more about Seminole tax hike"
							>
								<Fa icon={faGlobe} size="2x" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="text-center">
			<a
				href="mailto:henrik@henrikfiedler.de"
				class="btn btn-lg btn-outline-primary"
				aria-label="Read more about Seminole tax hike"
			>
				<Fa icon={faEnvelope} class="me-1" />
				<span>Kontakt</span>
			</a>
		</div>
	</div>
</section> -->

<!-- <section class="container-fluid" id="tennis">
	<div class="container py-5">
		<div class="card p-5">
			<h2>Tennis</h2>
			<hr />
			<p>
				Bereits seit frühester Kindheit bin ich begeisterter Tennisspieler. Aktuell spiele ich bei
				den Herren Aktive des
				<a
					href="https://tc-donzdorf.de"
					target="_blank"
					rel="noreferrer"
					aria-label="Read more about Seminole tax hike">TC&nbsp;Donzdorf</a
				>
				und bin dort auch Mannschaftsführer.
				<br />
				Ich bin auch über meine Aufgabe als Mannschaftsführer hinaus im Verein engagiert. Durch die Pandemie
				und der notwendigen Kontaktverfolgung, kam die Idee zum Pilotprojekt
				<a
					href="https://bookcourts.de"
					target="_blank"
					rel="noreferrer"
					aria-label="Read more about Seminole tax hike">BookCourts</a
				>.
			</p>
		</div>
	</div>
</section> -->
