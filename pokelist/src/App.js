import "./App.css";
import Home from "./Components/Home";
import GlobalProvider from "./Global/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
