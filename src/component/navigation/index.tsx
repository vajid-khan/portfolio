/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

export enum Pages {
	about = "about",
	resume = "resume",
	contact = "contact",
}

interface Props {
	page: string;
	navigate: (page: string) => void;
}

const body = document.getElementById('body');

const Navigation: React.FC<Props> = ({ page, navigate }) => {
	const [isActive, setActive] = useState(false);

	useEffect(()  => {
		setActive(false);
	},  [page]);

	useEffect(() => {
		if (isActive) {
			body?.classList.add('open-menu');
		} else {
			body?.classList.remove('open-menu')
		}
	}, [isActive]);

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
					<li
						className='nav__item'
						onClick={() => navigate(Pages.about)}>
						<a
							className={page === Pages.about ? "active" : ""}
							href={"#"}>
							About
						</a>
					</li>
					<li
						className='nav__item'
						onClick={() => navigate(Pages.resume)}>
						<a
							className={page === Pages.resume ? "active" : ""}
							href={"#"}>
							Resume
						</a>
					</li>
					<li
						className='nav__item'
						onClick={() => navigate(Pages.contact)}>
						<a
							className={page === Pages.contact ? "active" : ""}
							href={"#"}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Navigation;
