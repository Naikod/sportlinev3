import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404NotFound from "./component/core/page404NotFound";
import Main from "./layout/main";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;