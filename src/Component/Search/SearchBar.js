import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
	state = { searchText: "" };

	formSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.searchText);
	}
	render() {
		return (
			<div className="ui search">
				<form onSubmit={this.formSubmit}>
					<div className="ui icon input full-width">
						<input
							className="prompt"
							type="text"
							placeholder="Search Images..."
							value={this.state.searchText}
							onChange={(e) => { this.setState({ searchText: e.target.value }) }}

						/>
						<i className="search icon"></i>
					</div>
				</form>
				<div className="results"></div>
			</div>
		)
	}
}
export default SearchBar;