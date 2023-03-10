
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const[darkMode,setDarkMode]=useState(false);
  const palatteType=darkMode?'dark':'light';
  const theme=createTheme({
    palette:{
      mode: palatteType,
      background:{
        default: palatteType==='light'?'#eaeaea':'#121212'
      }
    }

  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
       <Outlet /> 
    </Container>

    </ThemeProvider>
  );
}

export default App;
  