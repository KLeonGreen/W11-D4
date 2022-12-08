import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Articledisplay from "./components/Articledisplay";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadArticle from "./components/ReadArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Articledisplay />} />
          <Route path="/article/:id" element={<ReadArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
