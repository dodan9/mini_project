import { BrowserRouter } from "react-router-dom";
import { appRoutes } from "src/routes/appRoutes";

function App() {
  return (
    <>
      <BrowserRouter>{appRoutes()}</BrowserRouter>
    </>
  );
}

export default App;
