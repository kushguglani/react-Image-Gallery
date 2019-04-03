import React, { Component } from 'react';

import ImageCard from './ImageCard';
import './ImageGrid.css'

class ImageGallery extends Component {
	render() {
		let imageList = this.props.images.map(img=> 
			<ImageCard key={img.id} img={img} /> 
		);
		return(
			<div className="image-list">
				{imageList}
			</div>
		);
		
	}
}

export default ImageGallery;