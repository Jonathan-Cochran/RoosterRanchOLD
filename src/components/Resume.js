import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
	render() {
		return(
			<div>
			  <Grid>
			    <Cell col={4}>
			      <div style={{textAlign: 'center'}}>
			      	<img
			      		src='JonathanCochran-1200.jpg'
			      		alt='Jonathan Cochran Picture'
			      		style={{height: '200px'}}
			      	/>
			      </div>

			      <h2 style={{paddingTop: '.5em'}}>Jonathan Cochran</h2>
			      <h4 style={{color: 'grey'}}>Technology Leader</h4>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			      <p>Lorem Ipsum</p>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			      <h5>Address</h5>
			      <p>3232 N. CR-605, Sunbury, OH 43074</p>
			      <h5>Phone</h5>
			      <p>614.361.2887</p>
			      <h5>Email</h5>
			      <p>Jonathan.Cochran@gmail.com</p>
			      <h5>Web</h5>
			      <p>mywebsite.com</p>
			      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
			    </Cell>
			    <Cell className='resume-right-col' col={8}>
			      <h2>Education</h2>

			      <Education 
			        startYear='1996'
			        endYear='2000'
			        schoolName='Bowling Green State University'
			        schoolDescription='sdl dfsjlkj asfkljsdfjkl'
			      />
			      <hr style={{borderTop: '3px solid #e22947'}} />

			      <h2>Experience</h2>

			      <Experience 
			        startYear='2000'
			        endYear='2002'
			        jobName='Speedway SuperAmerica LLC'
			        jobDescription='First Job'
			      />

			      <Experience 
			        startYear='2002'
			        endYear='2005'
			        jobName='Progressive Medical Inc.'
			        jobDescription='Second Job'
			      />

			      <Experience 
			        startYear='2005'
			        endYear='2017'
			        jobName='Nationwide Insurance'
			        jobDescription='Third Job'
			      />

			      <hr style={{borderTop: '3px solid #e22947'}} />

			      <h2>Skills</h2>


			    </Cell>
			  </Grid>
			</div>
		)
	}
}

export default Resume;