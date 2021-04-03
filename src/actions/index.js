import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
      });
  };
};

export const addSmurf = (smurf) => {
  if (!smurf) {
    return {
      type: ADD_SMURF_FAILURE,
    };
  } else {
    return {
      type: ADD_SMURF,
      payload: smurf,
    };
  }
};

export const addSmurfFailure = (message) => {
  return {
    type: ADD_SMURF_FAILURE,
    payload: message,
  };
};
