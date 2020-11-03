import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./themeConfig";
import Container from "./components/Container";

const data = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([1, 2, 3]);
    }, 2000);
  });
};

function App() {
  useEffect(() => {
    data().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App; 
