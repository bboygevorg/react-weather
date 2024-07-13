import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route to="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
