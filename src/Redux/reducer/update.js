import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.UPDATE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        profileData: action.payload.response,
      };
    case actions.UPDATE_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default update;
