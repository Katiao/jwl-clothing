import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import jackets from '../../images/jackets.jpg';
import jeans from '../../images/jeans.jpg';
import shoes from '../../images/shoes.jpg';
import women from '../../images/women.jpg';
import men from '../../images/men.jpg';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'jeans',
					imageUrl: `${jeans}`,
					id: 1,
				},
				{
					title: 'jackets',
					imageUrl: `${jackets}`,
					id: 2,
				},
				{
					title: 'shoes',
					imageUrl: `${shoes}`,
					id: 3,
				},
				{
					title: 'womens',
					imageUrl: `${women}`,
					size: 'large',
					id: 4,
				},
				{
					title: 'mens',
					imageUrl: `${men}`,
					size: 'large',
					id: 5,
				},
			],
		};
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
