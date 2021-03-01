import React from "react";

function App() {
	return (
		<>
			<main className='main'>
				<div className='container gutter-top'>
					<div className='row sticky-parent'>
						<aside className='col-12 col-md-12 col-xl-3'>
							<div className='sidebar box shadow pb-0 sticky-column'>
								<svg
									className='avatar avatar--180'
									viewBox='0 0 188 188'>
									<g className='avatar__box'>
										<image
											href='/assets/img/avatar-1.jpg'
											height='100%'
											width='100%'
										/>
									</g>
								</svg>
								<div className='text-center'>
									<h3 className='title title--h3 sidebar__user-name'>
										<span className='weight--500'>
											Felecia
										</span>{" "}
										Brown
									</h3>
									<div className='badge badge--dark'>
										Creative Director
									</div>

									<div className='social'>
										<a
											className='social__link'
											href='../../../../www.facebook.com/index.html'>
											<i className='font-icon icon-facebook'></i>
										</a>
										<a
											className='social__link'
											href='../../../../www.behance.com/index.html'>
											<i className='font-icon icon-twitter'></i>
										</a>
										<a
											className='social__link'
											href='../../../../www.linkedin.com/index.html'>
											<i className='font-icon icon-linkedin2'></i>
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
											<i className='font-icon icon-calendar'></i>
											March 12, 1995
										</li>
										<li
											className='contacts-block__item'
											data-toggle='tooltip'
											data-placement='top'
											title='Address'>
											<i className='font-icon icon-location'></i>
											Hong Kong, China
										</li>
										<li
											className='contacts-block__item'
											data-toggle='tooltip'
											data-placement='top'
											title='E-mail'>
											<a href='mailto:example@mail.com'>
												<i className='font-icon icon-envelope'></i>
												example@mail.com
											</a>
										</li>
										<li
											className='contacts-block__item'
											data-toggle='tooltip'
											data-placement='top'
											title='Phone'>
											<i className='font-icon icon-phone'></i>
											+1 (070) 123-4567
										</li>
										<li
											className='contacts-block__item'
											data-toggle='tooltip'
											data-placement='top'
											title='Skype'>
											<a href='skype:skype-example'>
												<i className='font-icon icon-skype'></i>
												Felecia_Brown
											</a>
										</li>
									</ul>

									<a className='btn' href='#'>
										<i className='font-icon icon-download'></i>{" "}
										Download CV
									</a>
								</div>
							</div>
						</aside>

						<div className='col-12 col-md-12 col-xl-9'>
							<div className='box shadow pb-0'>
								<div className='circle-menu'>
									<div className='hamburger'>
										<div className='line'></div>
										<div className='line'></div>
										<div className='line'></div>
									</div>
								</div>
								<div className='inner-menu js-menu'>
									<ul className='nav'>
										<li className='nav__item'>
											<a
												className='active'
												href='about.html'>
												About
											</a>
										</li>
										<li className='nav__item'>
											<a href='resume.html'>Resume</a>
										</li>
										<li className='nav__item'>
											<a href='portfolio.html'>
												Portfolio
											</a>
										</li>
										<li className='nav__item'>
											<a href='blog.html'>Blog</a>
										</li>
										<li className='nav__item'>
											<a href='contact.html'>Contact</a>
										</li>
									</ul>
								</div>

								<div className='pb-0 pb-sm-2'>
									<h1 className='title title--h1 first-title title__separate'>
										About Me
									</h1>
									<p>
										I'm Creative Director and UI/UX Designer
										from Sydney, Australia, working in web
										development and print media. I enjoy
										turning complex problems into simple,
										beautiful and intuitive designs.
									</p>
									<p>
										My job is to build your website so that
										it is functional and user-friendly but
										at the same time attractive. Moreover, I
										add personal touch to your product and
										make sure that is eye-catching and easy
										to use. My aim is to bring across your
										message and identity in the most
										creative way. I created web design for
										many famous brand companies.
									</p>
								</div>

								<div className='box-inner pb-0'>
									<h2 className='title title--h3'>
										What I'm Doing
									</h2>
									<div className='row'>
										<div className='col-12 col-lg-6'>
											<div className='case-item box box__second'>
												<img
													className='case-item__icon'
													src='../assets/icons/dark/icon-design.svg'
													alt=''
												/>
												<div>
													<h3 className='title title--h5'>
														Web Design
													</h3>
													<p className='case-item__caption'>
														The most modern and
														high-quality design made
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
														High-quality and
														professional development
														of sites at the
														professional level.
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
													<h3 className='title title--h5'>
														Mobile Apps
													</h3>
													<p className='case-item__caption'>
														Professional development
														of applications for iOS
														and Android.
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
													<h3 className='title title--h5'>
														Photography
													</h3>
													<p className='case-item__caption'>
														I make high-quality
														photos of any category
														at a professional level.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='box-inner'>
									<h2 className='title title--h3'>
										Testimonials
									</h2>

									<div className='swiper-container js-carousel-review'>
										<div className='swiper-wrapper'>
											<div className='swiper-slide review-item'>
												<svg
													className='avatar avatar--80'
													viewBox='0 0 84 84'>
													<g className='avatar__hexagon'>
														<image
															href='../assets/img/avatar-2.jpg'
															height='100%'
															width='100%'
														/>
													</g>
												</svg>
												<h4 className='title title--h5'>
													Daniel Lewis
												</h4>
												<p className='review-item__caption'>
													Felecia was hired to create
													a corporate identity. We
													were very pleased with the
													work done.
												</p>
											</div>

											<div className='swiper-slide review-item'>
												<svg
													className='avatar avatar--80'
													viewBox='0 0 84 84'>
													<g className='avatar__hexagon'>
														<image
															href='../assets/img/avatar-3.jpg'
															height='100%'
															width='100%'
														/>
													</g>
												</svg>
												<h4 className='title title--h5'>
													Jessica Miller
												</h4>
												<p className='review-item__caption'>
													Thanks to the skill of
													Felecia, we have a design
													that we can be proud of.
												</p>
											</div>

											<div className='swiper-slide review-item'>
												<svg
													className='avatar avatar--80'
													viewBox='0 0 84 84'>
													<g className='avatar__hexagon'>
														<image
															href='../assets/img/avatar-4.jpg'
															height='100%'
															width='100%'
														/>
													</g>
												</svg>
												<h4 className='title title--h5'>
													Tanya Ruiz
												</h4>
												<p className='review-item__caption'>
													Felecia was hired to create
													a corporate identity. We
													were very pleased with the
													work done.
												</p>
											</div>

											<div className='swiper-slide review-item'>
												<svg
													className='avatar avatar--80'
													viewBox='0 0 84 84'>
													<g className='avatar__hexagon'>
														<image
															href='../assets/img/avatar-5.jpg'
															height='100%'
															width='100%'
														/>
													</g>
												</svg>
												<h4 className='title title--h5'>
													Thomas Castro
												</h4>
												<p className='review-item__caption'>
													Thanks to the skill of
													Felecia, we have a design
													that we can be proud of.
												</p>
											</div>
										</div>

										<div className='swiper-pagination'></div>
									</div>
								</div>

								<div className='box-inner'>
									<h2 className='title title--h3'>Clients</h2>

									<div className='swiper-container js-carousel-clients'>
										<div className='swiper-wrapper'>
											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>

											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>

											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>

											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>

											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>

											<div className='swiper-slide'>
												<a href='#'>
													<img
														src='/assets/img/logo-partner-white.svg'
														alt='Logo'
													/>
												</a>
											</div>
										</div>

										<div className='swiper-pagination'></div>
									</div>
								</div>
							</div>

							<footer className='footer'>© 2019 vCard</footer>
						</div>
					</div>
				</div>
			</main>

			<div className='back-to-top'></div>
		</>
	);
}

export default App;
