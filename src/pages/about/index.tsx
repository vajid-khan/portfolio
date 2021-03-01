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
					I'm B.E Computer Engg Graduate from Mumbai, India. I have
					been working in web and app development ever since.
				
					My expertise are to build web and mobile application which
					are user friendly and easy to use. with technologies are
					like React, React Native, PHP Laravel MVC.
				</p>
			</div>
			<div className='box-inner pb-0'>
				<h2 className='title title--h3'>What I'm Doing</h2>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<i className='fa-2x fa fa-home text-primary'></i>
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
							<i className='fa-2x fa fa-home text-primary'></i>
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
							<i className='fa-2x fa fa-home text-primary'></i>
							<div>
								<h3 className='title title--h5'>Web Application</h3>
								<p className='case-item__caption'>
									I make high-quality photos of any category
									at a professional level.
								</p>
							</div>
						</div>
					</div>

					<div className='col-12 col-lg-6'>
						<div className='case-item box box__second'>
							<i className='fa-2x fa fa-home text-primary'></i>
							<div>
								<h3 className='title title--h5'>Deployment</h3>
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
