import axios from "axios";
import {getRemoteColorsSuccess, getRemoteColorsFailure} from "./colorActions";

const colorsSource = "http://www.mocky.io/v2/5a37a7403200000f10eb6a2d";

export const getRemoteColors = () => {
	return (dispatch: { (arg0: { type: string; payload: object; }): void; (arg0: { type: string; payload: object; }): void; }) => {
		const url = colorsSource;
		return axios.get(url)
			.then(res => {
				const data = res.data;
				console.log('getREmoteColors data', data)
				dispatch(getRemoteColorsSuccess(data));
			})
			.catch(err => dispatch(getRemoteColorsFailure(err)));
	};
};