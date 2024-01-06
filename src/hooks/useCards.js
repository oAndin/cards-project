import axios from "axios";
import { useEffect, useReducer } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { data: null, error: null, loading: true };
    case "SUCESS":
      return { data: action.responseData, error: null, loading: false };
    case "ERROR":
      return { data: null, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};

const useHttp = (url, method = "GET", body = null, dependencies = []) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SEND" })
      try {
        const response = await axios({ url, method, data: body });
        dispatch({ type: "SUCESS", responseData: response.data })
      } catch (error) {
        dispatch({ type: "ERROR", errorMessage: "Error useCards hook" })
      }
    }
    fetchData();
  }, dependencies)
  return httpState;
};

export default useHttp;