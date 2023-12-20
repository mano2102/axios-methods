import logo from "./logo.svg";
import "./App.css";
import UserTable from "./components/UserTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditTable from "./components/EditTable";
import PostUser from "./components/PostUser";
import UserList from "./components/UserList";
// import MobileView from "./components/MobileView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/edit/:id" element={<EditTable />} />
          <Route path="/post" element={<PostUser />} />
          <Route path="/user" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
