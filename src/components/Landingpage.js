import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
						  src="JonathanCochran-1200.jpg"
						  alt="avatar"
						  className="avatar-img"
						/>

						<div className="banner-text">
							<h1>離 (ri) Seeker</h1>
							<hr/>
							<p>
								Father | Huband | Servant Leader | Technologist | Innovator | Agilist
							</p>
							<div className="social-links">

								{/* LinkedIn */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Twitter */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								  <i className="fa fa-twitter-square" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;