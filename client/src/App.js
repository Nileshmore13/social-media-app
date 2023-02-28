import AllRoutes from "./Routes/AllRoutes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
