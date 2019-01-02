export const acceptColor = (color: string) => ({
	type: "ACCEPT_COLOR",
	payload: color
});

export const getRemoteColorsSuccess = (data: object) => ({
	type: "GET_REMOTE_COLORS_SUCCESS",
	payload: data
});

export const getRemoteColorsFailure = (error: { message: { error: object} } ) => ({
  type: "GET_REMOTE_COLORS_FAILURE",
  payload: error.message.error
});