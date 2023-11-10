import { Route, Routes } from "react-router";
import "./App.css";
import { Template, Home , GeneratedTemplate} from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/template/:id`} element={<Template />} />
        <Route path={`/generated/:id`} element={<GeneratedTemplate />} />

      </Routes>
    </>
  );
}

export default App;











