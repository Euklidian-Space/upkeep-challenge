import {
  INITIALIZE_AUTH,
  INITIALIZE_AUTH_SUCCESS,
  INITIALIZE_AUTH_FAILURE,
  FETCH_WORK_ORDERS,
  FETCH_WORK_ORDERS_FAILURE,
  FETCH_WORK_ORDERS_SUCCESS,
  CREATE_WORK_ORDER,
  CREATE_WORK_ORDER_FAILURE,
  CREATE_WORK_ORDER_SUCCESS
} from "./types";

export default function (upkeepAPI) {

  const login = () => dispatch => {
    dispatch({ type: INITIALIZE_AUTH });

    return upkeepAPI.login()
      .then(data => {
        const { sessionToken } = data.result;

        dispatch({ type: INITIALIZE_AUTH_SUCCESS, payload: { sessionToken } });
      })
      .catch(authErr => dispatch({ type: INITIALIZE_AUTH_FAILURE, payload: { authErr } }));
  };

  const fetchWorkOrders = opts => dispatch => {
    dispatch({ type: FETCH_WORK_ORDERS });

    return upkeepAPI.getAllWorkOrders(opts)
      .then(({ results }) => {
        dispatch({ type: FETCH_WORK_ORDERS_SUCCESS, payload: { workOrders: results } });
      })
      .catch(err => dispatch({ type: FETCH_WORK_ORDERS_FAILURE, payload: { err } }));
  };

  const createWorkOrder = opts => (dispatch, getState) => {
    dispatch({ type: CREATE_WORK_ORDER });
    const { sessionToken } = getState().appData;

    return upkeepAPI.createWorkOrder({ token: sessionToken, opts })
      .then(({ result }) => {
        dispatch({ type: CREATE_WORK_ORDER_SUCCESS, payload: { workOrder: result }});
      })
      .catch(err => dispatch({ type: CREATE_WORK_ORDER_FAILURE, payload: { err } }));
  };

  return {
    login,
    fetchWorkOrders,
    createWorkOrder
  };
}