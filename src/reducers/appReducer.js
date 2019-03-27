import { 
  INITIALIZE_AUTH,
  INITIALIZE_AUTH_SUCCESS,
  INITIALIZE_AUTH_FAILURE  
} from "../actions/types";

const initialState = {
  authorized: false,
  authorizing: false,
  sessionToken: null,
  authErr: null
};

export default function(state = initialState, action) {
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

    case INITIALIZE_AUTH_FAILURE: 
      const { authErr } = action.payload;

      return {
        ...state,
        authorized: false,
        authorizing: false,
        authErr        
      };

    default:
      return state;
  }
}