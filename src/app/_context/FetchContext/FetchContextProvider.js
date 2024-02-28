"use client"
import { useState } from "react";
import FetchContext from "./FetchContext";


const FetchContextProvider = ({ children }) => {
    const [fetchData, setFetchData] = useState({});
  return <FetchContext.Provider value={{fetchData}}>{children}</FetchContext.Provider>;
};
export default FetchContextProvider;
