import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories() {
	  if(this.state.activeTab === 0){
		return(
		  <div className="projects-grid">
			{/* React Web Profile Project  */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >Personal Portfolio Website</CardTitle>
			  <CardText>
			  	This is my first attempt at a React Website. I decided to make something that I have always wanted to have and soemthing functional... A personal portfolio site.
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<Button colored>CodePen</Button>
			  	<Button colored>LiveDemo</Button>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>

			{/* React Project 2 */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >React Project 1</CardTitle>
			  <CardText>
			  	alskfjo asdfijol asfdijomno
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<Button colored>CodePen</Button>
			  	<Button colored>LiveDemo</Button>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>

			{/* React Project 3 */}
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >React Project 1</CardTitle>
			  <CardText>
			  	alskfjo asdfijol asfdijomno
			  </CardText>
			  <CardActions border>
			  	<Button colored>GitHub</Button>
			  	<Button colored>CodePen</Button>
			  	<Button colored>LiveDemo</Button>
			  </CardActions>
			  <CardMenu style={{color: '#fff'}}>
			    <IconButton name="share" />
			  </CardMenu>
			</Card>
		  </div>
	  	)
	  } else if(this.state.activeTab === 1) {
	  	return(
	  		<div><h1>This is Rails</h1></div>
	  	)
	  } else if(this.state.activeTab === 2) {
	  	return(
	  		<div><h1>This is MongoDB</h1></div>
	  	)	  	
	  } else if(this.state.activeTab === 3) {
	  	return(
	  		<div><h1>This is Angular</h1></div>
	  	)	  	
	  }
	}

	render() {
		return(
			<div className="catagory-tabs">
			  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
				<Tab>React</Tab>
				<Tab>Rails</Tab>
				<Tab>MongoDB</Tab>
				<Tab>Angular</Tab>
			  </Tabs>

			  	<Grid>
			  	  <Cell col={12}>
			  	    <div className="content">{this.toggleCategories()}</div>
			  	  </Cell>
			  	</Grid>
			</div>
		)
	}
}

export default Project;