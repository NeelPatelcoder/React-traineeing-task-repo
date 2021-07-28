import axios from "axios";


export const GET_PHOTOS = 'GET_PHOTOS';
export const LOADING_FINISHED = 'LOADING_FINISHED';
export const SEARCH_PHOTOS ='SEARCH PHOTOS';


const makeActionCreator = (type) =>{
  return function (payload) {
    return {
      type,
      payload
    }
  }
}

export const getPhotos = makeActionCreator(GET_PHOTOS);
export const loadingFinished = makeActionCreator(LOADING_FINISHED);

export const searchPhotos = (query) => {
  return(dispatch,getState)=>{
    axios.get(`https://api.unsplash.com/search/photos/?query=${query}&per_page=30&orientation=squarish&client_id=USM9XwEpUhPCdZGpfYPMlRKn2WhSLqPVSHzushqRXdA`)
    // .then(response => response.json())
    .then(response => {
      const json = response.data
      console.log(json);
      dispatch(getPhotos(json.results))
      dispatch(loadingFinished())
    })
  }
}
