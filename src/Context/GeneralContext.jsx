import { createContext, useState, useContext } from "react";
import { mainData, mainLimit } from "../MainData";

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const limit = mainLimit;
  const [data, setData] = useState(mainData);
  const value = {
    data,
    setData,
    limit,
  };
  return (
    <GeneralContext.Provider value={value}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export { useContext };
