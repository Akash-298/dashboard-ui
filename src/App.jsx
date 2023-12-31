import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Bar from "./scenes/Bar";
import Dashboard from "./scenes/dashboard";
import Pie from "./scenes/Pie";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar></Sidebar>
            <main className="content">
              <Topbar></Topbar>
              <Routes>
              <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<Bar/>}></Route>
                <Route path="/customers" element={<Pie/>}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
