import { Routes, Route } from "react-router-dom";
import Appbar from "../component/Appbar";
import Signup from "../component/Signup";

export default function Rout() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Signup />}></Route> */}
        <Route path="/" element={<Signup />}></Route>
        <Route path="home" element={<Appbar />}></Route>
      </Routes>
    </>
  );
}
