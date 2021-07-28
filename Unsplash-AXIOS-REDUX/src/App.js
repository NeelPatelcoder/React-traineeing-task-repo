import React, { Component } from 'react';

import './styles/App.css';

import { connect } from 'react-redux';
import { getPhotos, loadingFinished, searchPhotos } from './actions';


class App extends Component {
  componentDidMount = () => {
    fetch(`https://api.unsplash.com/photos/?per_page=20&orientation=squarish&client_id=USM9XwEpUhPCdZGpfYPMlRKn2WhSLqPVSHzushqRXdA`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.getPhotosAsProp(json)
        this.props.loadingFinishedAsProp()
      })
  }
  handleSubmit(event) {
    event.preventDefault();
    const whatWasTyped = this.text.value;
    this.props.searchPhotosAsProp(whatWasTyped);
  }
  render() {
    return (
      <div className="App">
        {this.props.isLoading}
        <div className="App-header">

          <h2>Unsplash API Photo Search</h2>
        </div>
        <form className="searchbar" onSubmit={this.handleSubmit.bind(this)}>
          <input className="search" placeholder="Search for images" type='text' ref={element => this.text = element} />
          <button className="btn">Submit</button>
        </form>
        <div className="search_results">
          {
            this.props.photos.map(photo =>
              <div className='items' key={photo.id}>
                <img className="item" src={photo.urls.regular} alt="pic" />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAsProp: (photosTheParamater) =>
      dispatch(getPhotos(photosTheParamater)),
    loadingFinishedAsProp: () => dispatch(loadingFinished()),
    searchPhotosAsProp: (searchTerm) => dispatch(searchPhotos(searchTerm))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
