import React from "react";

interface Props {}

const About: React.FC<Props> = (props) => {
	return (
		<>
			<div className='pb-0 pb-sm-2'>
				<h1 className='title title--h1 first-title title__separate'>
					About Me
				</h1>
				<p>
					I'm Creative Director and UI/UX Designer from Sydney,
					Australia, working in web development and print media. I
					enjoy turning complex problems into simple, beautiful and
					intuitive designs.
				</p>
				<p>
					My job is to build your website so that it is functional and
					user-friendly but at the same time attractive. Moreover, I
					add personal touch to your product and make sure that is
					eye-catching and easy to use. My aim is to bring across your
					message and identity in the most creative way. I created web
					design for many famous brand companies.
				</p>
			</div>
			<div className='box-inner pb-0'>
				<h2 className='title title--h3'>What I'm Doing</h2>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<img
								className='case-item__icon'
								src='../assets/icons/dark/icon-design.svg'
								alt=''
							/>
							<div>
								<h3 className='title title--h5'>Web Design</h3>
								<p className='case-item__caption'>
									The most modern and high-quality design made
									at a professional level.
								</p>
							</div>
						</div>
					</div>

					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<img
								className='case-item__icon'
								src='../assets/icons/dark/icon-dev.svg'
								alt=''
							/>
							<div>
								<h3 className='title title--h5'>
									Web Development
								</h3>
								<p className='case-item__caption'>
									High-quality and professional development of
									sites at the professional level.
								</p>
							</div>
						</div>
					</div>

					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<img
								className='case-item__icon'
								src='../assets/icons/dark/icon-app.svg'
								alt=''
							/>
							<div>
								<h3 className='title title--h5'>Mobile Apps</h3>
								<p className='case-item__caption'>
									Professional development of applications for
									iOS and Android.
								</p>
							</div>
						</div>
					</div>

					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<img
								className='case-item__icon'
								src='../assets/icons/dark/icon-photo.svg'
								alt=''
							/>
							<div>
								<h3 className='title title--h5'>Photography</h3>
								<p className='case-item__caption'>
									I make high-quality photos of any category
									at a professional level.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;
