import {
	USER_LOGIN_FAIL,
	USER_LOGIN_LOGOUT,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
} from '../constants/userConstants';
import axios from 'axios';
export const userLogin = (email, password) => async (dispatch) => {
	dispatch({ type: USER_LOGIN_REQUEST });
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = { email, password };
	try {
		const { data } = await axios.post(`/api/users/login`, body, config);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
