import React from "react";
import ProgressBar from "../../component/progress/bar";

interface Props {}

interface ISkill {
	title: string;
	level: number;
}

const skills: ISkill[] = [
	{
		title: "React",
		level: 90,
	},
	{
		title: "React Native",
		level: 80,
	},
	{
		title: "PHP",
		level: 90,
	},
	{
		title: "Laravel",
		level: 95,
	},
];

const Resume: React.FC<Props> = (props) => {
	return (
		<>
			<div className='pb-3'>
				<h1 className='title title--h1 first-title title__separate'>
					Resume
				</h1>
			</div>

			<div className='pb-0'>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<h2 className='title title--h3'>
							<i className='fa-2x fa fa-home text-primary'></i>{" "}
							Experience
						</h2>
						<div className='timeline'>
							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									University School of the Arts
								</h5>
								<span className='timeline__period'>
									2007 — 2009
								</span>
								<p className='timeline__description'>
									Nemo enims ipsam voluptatem, blanditiis
									praesentium voluptum delenit atque corrupti,
									quos dolores et quas molestias exceptur.
								</p>
							</article>

							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									New York Academy of Art
								</h5>
								<span className='timeline__period'>
									2005 — 2007
								</span>
								<p className='timeline__description'>
									Ratione voluptatem sequi nesciunt, facere
									quisquams facere menda ossimus, omnis
									voluptas assumenda est omnis..
								</p>
							</article>

							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									High School of Art and Design
								</h5>
								<span className='timeline__period'>
									2003 — 2005
								</span>
								<p className='timeline__description'>
									Duis aute irure dolor in reprehenderit in
									voluptate, quila voluptas mag odit aut
									fugit, sed consequuntur magni dolores eos.
								</p>
							</article>
						</div>
					</div>

					<div className='col-12 col-lg-6'>
						<h2 className='title title--h3'>
							<i className='fa-2x fa fa-home text-primary'></i>{" "}
							Education
						</h2>
						<div className='timeline'>
							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									Creative Director
								</h5>
								<span className='timeline__period'>
									2015 — Present
								</span>
								<p className='timeline__description'>
									Nemo enim ipsam voluptatem blanditiis
									praesentium voluptum delenit atque corrupti,
									quos dolores et qvuas molestias exceptur.
								</p>
							</article>

							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									Art Director
								</h5>
								<span className='timeline__period'>
									2013 — 2015
								</span>
								<p className='timeline__description'>
									Nemo enims ipsam voluptatem, blanditiis
									praesentium voluptum delenit atque corrupti,
									quos dolores et quas molestias exceptur.
								</p>
							</article>

							<article className='timeline__item'>
								<h5 className='title title--h5 timeline__title'>
									Web Designer
								</h5>
								<span className='timeline__period'>
									2010 — 2013
								</span>
								<p className='timeline__description'>
									Nemo enims ipsam voluptatem, blanditiis
									praesentium voluptum delenit atque corrupti,
									quos dolores et quas molestias exceptur.
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>

			<div className='box-inner box-inner--rounded'>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<h2 className='title title--h3'>Design Skills</h2>
						<div className='box box__second'>
							{skills.map((skill) => (
								<ProgressBar
									key={skill.title}
									title={skill.title}
									value={skill.level}
								/>
							))}
						</div>
					</div>

					<div className='col-12 col-lg-6 mt-4 mt-lg-0'>
						<h2 className='title title--h3'>Coding Skills</h2>
						<div className='box box__second'>
							{skills.map((skill) => (
								<ProgressBar
									key={skill.title}
									title={skill.title}
									value={skill.level}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Resume;
