import axios from "axios";
import {getRemoteColorsSuccess, getRemoteColorsFailure} from "./colorActions";

const colorsSource = "http://www.mocky.io/v2/5a37a7403200000f10eb6a2d";

export const getRemoteColors = () => {
	return (dispatch) => {
		const url = colorsSource;
		return axios.get(url)
			.then(res => {
				let data = res.data;
				dispatch(getRemoteColorsSuccess(data));
			})
			.catch(err => dispatch(getRemoteColorsFailure(err)));
	};
};