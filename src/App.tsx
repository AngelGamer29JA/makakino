import Section from "./components/Section";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexRoute from "./routes/index";
import ControllerRoute from "./routes/controller";

export default function App() {
  

  return (
    <Section size="sm" margin="20px auto">
      <BrowserRouter basename="/">
        <Routes>
          <Route index path="/" element={<IndexRoute />} />
          <Route index path="/controller" element={<ControllerRoute />} />
        </Routes>
      </BrowserRouter>
    </Section>
  )
}