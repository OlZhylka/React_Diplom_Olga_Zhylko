import isoFetch from 'isomorphic-fetch';
import {loadingAC, setAC, SLUG_SET, AUTHOR_SET, GENRE_SET, COUNT_SET, SECTION_SET, SECTION_DELETE} from './helperForDispatch';

const dataLoad = (fetchConfig, type, dispatch) => async() => {
    dispatch( loadingAC(type.loading) );
      try {
        let response=await isoFetch(fetchConfig.URL, fetchConfig);
          if (!response.ok) {
            throw new Error("fetch error " + response.status);
        }
          let data = response.fromSession? JSON.parse(response.data) : await response.json();

          dispatch(setAC(type.set, data));
      }
      catch ( error )  {
          console.error('error:' +error);
      }
}

const setSlug = (dispatch) =>(slug) => {
    dispatch(setAC(SLUG_SET, slug));
}

const setAuthor = (dispatch) => (author) => {
    dispatch(setAC(AUTHOR_SET, author));
}

const setGenre = (dispatch) => (author) => {
    dispatch(setAC(GENRE_SET, author));
}
const setCount = (dispatch) => (count) => {
    dispatch(setAC(COUNT_SET, count));
}

const checkMyBook = (dispatch) => (myBookSection) => {
    console.log('mapDispatchToProps check dispatch')
    dispatch(setAC(SECTION_SET, myBookSection));
}

const deleteMyBook = (dispatch) => (myBookSection) => {
    dispatch(setAC(SECTION_DELETE, myBookSection));
}
export { dataLoad, setSlug, setAuthor, setGenre, setCount, checkMyBook, deleteMyBook};
