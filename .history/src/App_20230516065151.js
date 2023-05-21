import { React, useState, Suspense } from "react";
import AppRouter from "./routes";
import Avatar from "./components/avatar";
import Light from "./assets/images/lamp.svg";
import Dark from "./assets/images/night-mode.svg";
import Disk from "./assets/images/disk.svg";
import Layout from "./layout/nav";
import Footer from "./layout/footer";
import { useColorMode } from "theme-ui";
import "../node_modules/moretoggles/src/moretoggles.scss";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const [isDark, setIsDark] = useState(true);

  const toggleColorMode = () => {
    setColorMode(colorMode === "default" ? "dark" : "default");
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading">
            <Avatar
              image={Disk}
              alt="loading"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        }
      >
        <div className="toggle">
          <div className="toggle__item">
            <Avatar
              image={Light}
              alt="light"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="mt-io-navi">
            <input
              type="checkbox"
              id="slider"
              className="toggle__input"
              checked={isDark}
              onChange={toggleColorMode}
            />
            <label for="slider"></label>
          </div>
          <div className="toggle__item">
            <Avatar
              image={Dark}
              alt="dark"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <Layout colorMode={colorMode} />
        <AppRouter colorMode={colorMode} />
        <Footer colorMode={colorMode} />
      </Suspense>
    </div>
  );
}

export default App;
