import { createContext, useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <ContextGlobal.Provider value={{data}}>
      {children}
    </ContextGlobal.Provider>
  );
};
