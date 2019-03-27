import {
  INITIALIZE_AUTH,
  INITIALIZE_AUTH_SUCCESS,
  INITIALIZE_AUTH_FAILURE
} from "./types";

export default function (upkeepAPI) {

  const login = () => dispatch => {
    dispatch({ type: INITIALIZE_AUTH });

    return upkeepAPI.login()
      .then(data => {
        const { sessionToken } = data.result;
        console.log("auth success! ", sessionToken);

        dispatch({ type: INITIALIZE_AUTH_SUCCESS, payload: { sessionToken } });
      })
      .catch(authErr => dispatch({ type: INITIALIZE_AUTH_FAILURE, payload: { authErr } }));
  };

  return {
    login
  };
}