import React, { useState } from "react";

interface Props {}

const Navigation: React.FC<Props> = (props) => {
	const [isActive, setActive] = useState(false);

	return (
		<>
			<div
				className='circle-menu'
				onClick={() => setActive((prev) => !prev)}>
				<div className={`hamburger ${isActive ? "is-active" : ""}`}>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</div>
			</div>
			<div
				className={`inner-menu js-menu ${isActive ? "is-active" : ""}`}>
				<ul className='nav' style={{ width: isActive ? "100%" : "0%" }}>
					<li className='nav__item'>
						<a className='active' href='about.html'>
							About
						</a>
					</li>
					<li className='nav__item'>
						<a href='resume.html'>Resume</a>
					</li>
					<li className='nav__item'>
						<a href='portfolio.html'>Portfolio</a>
					</li>
					<li className='nav__item'>
						<a href='blog.html'>Blog</a>
					</li>
					<li className='nav__item'>
						<a href='contact.html'>Contact</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Navigation;
