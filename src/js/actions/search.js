import axios from 'axios';

export const fetchSearch = (search) => {
    let request = axios.get("https://restcountries.eu/rest/v2/name/"+search);
    return dispatch => {
        request.then(
            ({data}) => {
                dispatch({ type: 'FETCH_SEARCH', payload: data });
            },
            () => {
                dispatch({ type: 'FETCH_SEARCH', payload: null });
            }
        );
    };
};