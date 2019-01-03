import defaultState from '../defaultState';

const {acceptedColor, ...rest } = defaultState;

export default function apiReducer(
  state=rest, 
  action: { type: string, payload: string | object[] }
) {
	switch (action.type) {
	case "GET_REMOTE_COLORS_SUCCESS": {
		return {
			...state,
			colors: [...action.payload],
			flags: {...state.flags, loaded: true}
				
		};
	}
	case "GET_REMOTE_COLORS_FAILURE": {
		return {
			...state,
			flags: {...state.flags, loaded: false},
			remoteErrors: [...state.remoteErrors, action.payload]
		};
	}
	default:
		return state;
	}
}