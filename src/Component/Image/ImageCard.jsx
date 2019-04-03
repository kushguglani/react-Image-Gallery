import React, { Component } from 'react';

class ImageCard extends Component {
	constructor(props){
		super(props);
		this.ImageRef = React.createRef();
		this.state={spam : 0}
	}
	componentDidMount(){
		this.ImageRef.current.addEventListener('load',this.setSpams);
	}
	setSpams=()=>{
		let imgHeight = this.ImageRef.current.clientHeight;
		let spam = Math.ceil(imgHeight/10);
		console.log(spam);
		this.setState({spam})
	}
	render() {
		let {description, urls} = this.props.img;
		return (
			<img style={{gridRowEnd:`span ${this.state.spam}`}} ref = {this.ImageRef} src={urls.regular} alt={description} />
		);
	}
}

export default ImageCard;