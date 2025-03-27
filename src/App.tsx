import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./routes/ScrollToTop";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
