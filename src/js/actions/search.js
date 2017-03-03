import axios from 'axios';

export const fetchSearch = (search) => {
    if(search !== "") {
        let request = axios.get("https://restcountries.eu/rest/v2/name/"+search);
        return dispatch => {
            request.then(({data}) => {
                dispatch({ type: 'FETCH_SEARCH', payload: data });
            });
        };
    } else {
        return {type: 'FETCH_SEARCH', payload: null };
    }
};