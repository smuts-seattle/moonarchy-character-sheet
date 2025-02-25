import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CharacterSheet from "./CharacterSheet.tsx";
import Background from "./Background.tsx";
import Title from "./Title.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Background>
      <Title />
      <CharacterSheet />
    </Background>
  </StrictMode>
);
