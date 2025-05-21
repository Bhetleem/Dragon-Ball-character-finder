import "../scss/App.scss";

import { matchPath, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
    <header>
      <h1>Dragon Ball character finder</h1>
       <img src="./public/DragonBall_header.jpg" alt="Dragon Ball Logo" />
    </header>
    <main>
      <>
        <Filters/>
        <CharacterList/>
      </>
    </main>
    </>
  );
}

export default App;