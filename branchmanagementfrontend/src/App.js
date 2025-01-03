import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBranch from "./pages/CreateBranch";
import ViewBranch from "./pages/ViewBranch";
import EditBranch from "./pages/EditBranch";

import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/create" element={<CreateBranch />} />
                <Route exact path="/edit/:id" element={<EditBranch />} />
                <Route exact path="/view/:id" element={<ViewBranch />} />
            </Routes>
        </Router>
    );
}

export default App;
