import { Route, Routes } from "react-router-dom";
import "./App.css";
import LiveMatch from "./component/LiveMatch";
import MatchList from "./component/MatchList";
import Series from "./component/Series";
import Country from "./component/Country";
import BlogPage from "./component/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LiveMatch />}></Route>
      <Route path="/teams" element={<Country />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/blogs" element={<BlogPage />}></Route>
      <Route path="/schedule" element={<MatchList />}></Route>
    </Routes>
  );
}

export default App;
