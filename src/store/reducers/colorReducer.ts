import defaultState from '../defaultState';


export default function colorpickerReducer(
  state=defaultState, 
  action: { type: string, payload: string | object[] }
) {
	switch (action.type) {
	case "ACCEPT_COLOR": {
		return {
			...state,
			acceptedColor: action.payload
		};
	}	
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