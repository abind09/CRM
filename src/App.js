
import './App.css';
import Signup from './component/Signup';
import { Routes, Route } from "react-router-dom";
import Appbar from "./component/Appbar";



function App() {
  return (
    <Routes>
     
        <Route path="/" element={<Signup />}></Route>
        <Route path="home" element={<Appbar />}></Route>
      </Routes>
  );
}

export default App;
