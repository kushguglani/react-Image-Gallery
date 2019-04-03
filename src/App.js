import React from 'react';

import SearchBar from './Component/Search/SearchBar';
import UnspalshApi from './unsplash';
import ImageGallery from './Component/Image/ImageList';

class App extends React.Component {

	state = { images: [] }

	searchImage = async (searchText) => {
		console.log(searchText);
		const response = await UnspalshApi.get('/search/photos',
			{ params: { query: searchText, per_page: 20  }}
		);
		this.setState({ images: response.data.results })
	}
	render() {
		return (
			<div className="container">
				<SearchBar onSearch={this.searchImage} />
				<ImageGallery images={this.state.images} />
			</div>
		);
	}
}

export default App;