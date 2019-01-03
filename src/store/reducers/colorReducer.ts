import defaultState from '../defaultState';

const { acceptedColor } = defaultState;

export default function colorReducer(
  state={ acceptedColor }, 
  action: { type: string, payload: string | object[] }
) {
	switch (action.type) {
	case "ACCEPT_COLOR": {
		return {
			acceptedColor: action.payload
		};
	}	
	default:
		return state;
	}
}