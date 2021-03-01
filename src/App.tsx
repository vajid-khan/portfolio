import React from "react";
import Navigation from "./component/navigation";
import Profile from "./component/profile";
import About from "./pages/about";
import Resume from "./pages/resume";

function App() {
	return (
		<>
			<main className='main'>
				<div className='container gutter-top'>
					<div className='row sticky-parent'>
						<Profile />

						<div className='col-12 col-md-12 col-xl-9'>
							<div className='box shadow pb-0'>
								<Navigation  />

								{/* <About/> */}
								<Resume/>
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
