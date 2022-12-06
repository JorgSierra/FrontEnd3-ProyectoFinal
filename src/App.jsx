
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Favs'
import Template from "./Components/Template";



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/favs" element={<Favs />}></Route>
        </Route>
        <Route path="/favs" element={<Detail />}></Route>
      </Routes>

    </div>
  );
}

export default App;
