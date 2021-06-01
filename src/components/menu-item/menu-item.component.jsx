import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

/*with react router DOM, any component that gets rendered by our Route gets passed three arguments.
three properties: history, location and match props.
match prop: url is the url of our component that it got rendered up to from the route. 
match allows our components to build a nested route structure. we can build out dynacic routing without our component being aware of the entire url.
history prop: instead of using Link to take you to URL, you can use history.push('url'). Usually used in methods.
Location prop: tells us where we are currently. pathname: gives us full pathname of where we are.

*/

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

/* with router component allows me to avoid prop-drilling. history prop only available to Homepage but needed to be accessed by last child so prop drilling. With router is a higher order component: function that takes a component as an argument and returns you a modified component. with router returns us back a super powered menu item component with access to location, match and history propos that we need access to*/
export default withRouter(MenuItem);
