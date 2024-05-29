import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import PomodoroTimer from "../PomodoroTimer/PomodoroTimer.jsx";
import background from "../../assets/background.jpg";

function App() {
  return (
    <>
      <div className="page" 
      style={{backgroundImage:`url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width:'100vw',
              height:'100vh',
      }}>
        <div className="page__content">
          <Header />
          <Main />
          <PomodoroTimer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
