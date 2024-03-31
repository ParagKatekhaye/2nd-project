import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Jobs from "./components/Jobs";

function App() {
  //   const personlist = [
  //     { name: "parag", age: 22, course: "java" },
  //     { name: "mayur", age: 23, course: "python" },
  //     { name: "chetun", age: 25, course: "c" },
  //     { name: "raghav", age: 32, course: "cpp" },
  //     { name: "arnav", age: 25, course: "MERN" },
  //   ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute Component={Home} />} />
        <Route path="/jobs" element={<ProtectedRoute Component={Jobs} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
