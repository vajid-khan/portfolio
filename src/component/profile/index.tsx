/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import profile from "../../assets/vajid.jpg";
// import resume from "../../assets/resume.pdf";

interface Props {}

const Profile: React.FC<Props> = (props) => {
	return (
		<aside className='col-12 col-md-12 col-xl-3'>
			<div className='sidebar box shadow pb-0 sticky-column'>
				<div className='avatar'>
					<img src={profile} alt={"Avatar"} />
				</div>
				<div className='text-center'>
					<h3 className='title title--h3 sidebar__user-name'>
						<span className='weight--500'>Khan</span> Vajid
					</h3>
					<div className='badge badge--dark'>
						React Native | Laravel
					</div>

					<div className='social'>
						<a
							rel={"noreferrer"}
							target={"_blank"}
							className='social__link'
							href='https://www.linkedin.com/in/vajidali-khan-b094ba106/'>
							<i className='fa-2x fab fa-linkedin'></i>
						</a>
						<a
							rel={"noreferrer"}
							target={"_blank"}
							className='social__link'
							href='https://github.com/vajid-khan'>
							<i className='fa-2x fab fa-github'></i>
						</a>
					</div>
				</div>

				<div className='sidebar__info box-inner'>
					<ul className='contacts-block'>
						<li
							className='contacts-block__item'
							data-toggle='tooltip'
							data-placement='top'
							title='Birthday'>
							<i className='fas fa-birthday-cake'></i>
							Aug 04,1994
						</li>
						<li
							className='contacts-block__item'
							data-toggle='tooltip'
							data-placement='top'
							title='Address'>
							<i className='fas fa-map-marker-alt'></i>
							Dubai, UAE
						</li>
						<li
							className='contacts-block__item'
							data-toggle='tooltip'
							data-placement='top'
							title='E-mail'>
							<a href='mailto:khanvajidali04@gmail.com'>
								<i className='far fa-envelope'></i>
								khanvajidali04@gmail.com
							</a>
						</li>
						<li
							className='contacts-block__item'
							data-toggle='tooltip'
							data-placement='top'
							title='Phone'>
							<a href={'tel:+971564282405'}>
								<i className='fas fa-phone'></i>
								+971 56 4282 405
							</a>
						</li>
						<li
							className='contacts-block__item'
							data-toggle='tooltip'
							data-placement='top'
							title='Phone'>
							<a href={'tel:+919022903205'}>
								<i className='fas fa-phone'></i>
								+91 902290 3205
							</a>
						</li>
					</ul>

					<a className='btn' href={'#'}>
						<i className='font-icon icon-download'></i> Download CV
					</a>
				</div>
			</div>
		</aside>
	);
};
export default Profile;
