'use client';

import { useState, useEffect } from 'react';

const EXPERIENCE = [
	{
		company: 'General Dynamics Mission Systems',
		role: 'Software Engineer Intern',
		period: 'Sep 2025 - April 2026',
		team: 'Architected secure AI retrieval and diagnostic systems to automate technical knowledge access and accelerate engineering fault isolation.',
		logo: '/gd-logo.png',
	},
	{
		company: 'GoMyTax',
		role: 'Full Stack Developer Intern',
		period: 'May 2025 - Aug 2025',
		team: 'Shipped a production-ready full-stack platform featuring automated payment systems and optimized frontend performance for a seamless user experience.',
		logo: '/GMT-logo.png',
	},
	{
		company: 'McMaster SumoBots',
		role: 'Software Engineer',
		period: 'Sep 2023 - Present',
		team: 'Developed intelligent autonomous navigation logic and precision sensor-filtering systems to drive real-time decision-making in competitive environments.',
		logo: '/SB-logo.png',
	},
];

const PROJECTS = [
	{
		title: 'VibeTunes 🎶',
		date: 'Aug 2025',
		description: 'Mood-Based Playlist Generator',
		link: '#',
	},
	{
		title: 'HoopsIQ 🏀',
		date: 'May 2025 - Jul 2025',
		description: 'AI NBA Game Prediction',
		link: '#',
	},
];

export default function Home() {
	const [theme, setTheme] = useState('dark');
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'dark';
		setTheme(savedTheme);
		document.body.classList.add(savedTheme);

		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseOver = (e: Event) => {
			const target = e.target as HTMLElement;
			const closest = target.closest(
				'a, button, .contact-button, .project-item, .work-item'
			);
			if (closest) {
				setIsHovering(true);
			}
		};

		const handleMouseOut = () => {
			setIsHovering(false);
		};

		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseover', handleMouseOver);
		document.addEventListener('mouseout', handleMouseOut);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseover', handleMouseOver);
			document.removeEventListener('mouseout', handleMouseOut);
		};
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		document.body.classList.remove(theme);
		document.body.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<>
			<div
				style={{
					position: 'fixed',
					left: `${cursorPosition.x}px`,
					top: `${cursorPosition.y}px`,
					width: isHovering ? '24px' : '12px',
					height: isHovering ? '24px' : '12px',
					backgroundColor: 'var(--primary-color)',
					borderRadius: '50%',
					pointerEvents: 'none',
					transform: 'translate(-50%, -50%)',
					zIndex: 9999,
					boxShadow: isHovering
						? '0 0 12px rgba(123, 70, 108, 0.8)'
						: '0 0 6px rgba(123, 70, 108, 0.6)',
					transition: 'width 0.2s, height 0.2s, box-shadow 0.2s',
				}}
			/>
			<div id="root">
				<div className="app-header">
					<button className="theme-toggle" onClick={toggleTheme}>
						{theme === 'dark' ? '☀️' : '🌙'}
					</button>
				</div>

				<h1>hey, i'm viraj!</h1>
				<p>I’m a Software Engineering student at McMaster University who enjoys building intelligent systems and impactful software.</p>
				<p>I’m passionate about designing intelligent systems, building scalable full-stack applications, and solving complex problems through clean, efficient code. From developing AI-powered tools to building real-time backend systems, I enjoy turning ideas into impactful products.</p>
        <p>Beyond coding and building systems, I enjoy travelling, discovering new cultures, and staying active through sports and the gym. These experiences fuel my curiosity, sharpen my competitive edge, and push me to keep improving, whether I’m in the gym or solving a tough technical challenge.</p>
				<div className="contact-links">
					<a href="https://www.linkedin.com/in/viraj0119/" target="_blank" className="contact-button">
						LinkedIn
					</a>
					<a href="https://github.com/Viraj-16" target="_blank" className="contact-button">
						GitHub
					</a>
					<a href="mailto:340viraj@gmail.com" target="_blank" className="contact-button">
						Email
					</a>
				</div>

				<h2>Experience</h2>
				{EXPERIENCE.map((exp, i) => (
					<div key={i} className="work-item">
						<div className="work-header-with-logo">
							<div className="company-logo-fallback">{exp.company[0]}</div>
							<div className="work-header-content">
								<h3>{exp.role}</h3>
								<p className="work-company">{exp.company}</p>
								<p className="work-period">{exp.period}</p>
								<p className="work-team">{exp.team}</p>
							</div>
						</div>
					</div>
				))}

				<h2>Projects</h2>
				<div className="project-list">
					{PROJECTS.map((project, i) => (
						<div key={i} className="project-item">
							<a href={project.link}>
								<h3>{project.title}</h3>
								<p className="work-period">{project.date}</p>
								<p>{project.description}</p>
								<div className="project-tags">
									<span className="project-tag">View</span>
								</div>
							</a>
						</div>
					))}
				</div>

				<footer className="footer">
					<p>© 2026 Viraj Patel Portfolio</p>
				</footer>
			</div>
		</>
	);
}