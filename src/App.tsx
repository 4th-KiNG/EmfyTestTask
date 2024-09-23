import { useEffect } from "react";
import "./App.css";
import { GetLeads } from "./lib/api/leadsApi";

function App() {
  useEffect(() => {
    GetLeads();
  }, []);
  return <></>;
}

export default App;
