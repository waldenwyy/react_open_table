export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = (city) => {
    const fetchUrl = `http://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`;

    return (dispatch) => {
      dispatch(fetchDataBegin());

      return fetch(fetchUrl)
        .then(response => response.json())
        .then(result => {
          dispatch({ type: 'FETCH_DATA_SUCCESS', payload: result })
        })
        .catch(err => dispatch({ type: 'FETCH_DATA_FAILURE', error: err }))
    }
}

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = DATA => ({
    type: FETCH_DATA_SUCCESS,
    payload: { DATA }
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});