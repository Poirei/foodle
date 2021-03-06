import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

const initialState = { cities: [] };

const CityContext = createContext(initialState);

function CityProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CityContext.Provider value={{ state, dispatch }}>
      {children}
    </CityContext.Provider>
  );
}

export { CityContext, CityProvider };
