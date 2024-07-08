import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./layout/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
