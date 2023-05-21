import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./component/Responsive";
import LiveMatch from "./component/LiveMatch";
import MatchList from "./component/MatchList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LiveMatch />}></Route>
      <Route path="/teams" element={<ResponsiveAppBar />}></Route>
      <Route path="/ranking" element={<ResponsiveAppBar />}></Route>
      <Route path="/blogs" element={<ResponsiveAppBar />}></Route>
      <Route path="/series" element={<ResponsiveAppBar />}></Route>
      <Route path="/schedule" element={<MatchList />}></Route>
    </Routes>
  );
}

export default App;
