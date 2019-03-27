import {
  INITIALIZE_AUTH,
  INITIALIZE_AUTH_SUCCESS,
  INITIALIZE_AUTH_FAILURE,
  FETCH_WORK_ORDERS,
  FETCH_WORK_ORDERS_FAILURE,
  FETCH_WORK_ORDERS_SUCCESS
} from "../actions/types";

const initialState = {
  authorized: false,
  authorizing: false,
  sessionToken: null,
  fetchingWorkOrders: false,
  workOrders: [],
  errs: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_AUTH:
      return {
        ...state,
        authorizing: true
      };

    case INITIALIZE_AUTH_SUCCESS:
      const { sessionToken } = action.payload;

      return {
        ...state,
        authorizing: false,
        authorized: true,
        authErrs: null,
        sessionToken
      };

    case INITIALIZE_AUTH_FAILURE: {
      const { authErr } = action.payload;
      const { errs } = state;

      return {
        ...state,
        authorized: false,
        authorizing: false,
        errs: { ...errs, authErr }
      };
    }

    case FETCH_WORK_ORDERS:
      return {
        ...state,
        fetchingWorkOrders: true
      };

    case FETCH_WORK_ORDERS_SUCCESS:
      const { workOrders } = action.payload;
      return {
        ...state,
        fetchingWorkOrders: false,
        workOrders
      };

    case FETCH_WORK_ORDERS_FAILURE: {
      const { err } = action.payload;
      const { errs } = state;

      return {
        ...state,
        fetchingWorkOrders: false,
        errs: { ...errs, fetchWorkOrderErr: err }
      }
    }

    default:
      return state;
  }
}