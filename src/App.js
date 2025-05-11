import logo from "./logo.svg";
import "./App.css";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./usercontext";
import HomePage from "./Pages/HomePage";
import ThankYouPage from "./Pages/OpenPage";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ThankYouPage />} />
            <Route path="/Menu" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
