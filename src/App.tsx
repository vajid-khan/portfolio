import React, { useState } from "react";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import "./styles/style-dark.css";
import About from "./pages/about";
import Resume from "./pages/resume";
import Profile from "./component/profile";
import Navigation, { Pages } from "./component/navigation";

function App() {

	const [activePage, setActivePage] = useState("about");

	return (
		<>
			<main className='main'>
				<div className='container gutter-top'>
					<div className='row sticky-parent'>
						<Profile />

						<div className='col-12 col-md-12 col-xl-9'>
							<div className='box shadow pb-0'>
								<Navigation
									page={activePage}
									navigate={(page) => setActivePage(page)}
								/>
								{activePage === Pages.about && <About />}
								{activePage === Pages.resume && <Resume />}
							</div>

							<footer className='footer'>
								© 2021 Vajid Khan
							</footer>
						</div>
					</div>
				</div>
			</main>

			<div className='back-to-top'></div>
		</>
	);
}

export default App;
