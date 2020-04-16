import axios from 'axios';

export const fetchActivity = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_ACTIVITY_START'});
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            dispatch({ type: 'FETCHING_ACTIVITY_SUCCESS', payload:res.data});
        })
        .catch(err => console.log(err));
    };
}