import { createContext, useState, useEffect } from "react";
import axios from "axios";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => { setData(res.data); })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContextGlobal.Provider value={{data}}>
      {children}
    </ContextGlobal.Provider>
  );
};
