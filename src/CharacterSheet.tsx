import React from "react";
import { CharacterModel, DefaultCharacter } from "./CharacterModel";
import "./CharacterSheet.css";

function CharacterSheet() {
  const [character, setCharacter] =
    React.useState<CharacterModel>(DefaultCharacter);

  return (
    <>
      <div className="page-outline character-page">
        <div className="save-load-buttons">
          <input
            value="Save"
            type="button"
            onClick={() => {
              const content = JSON.stringify(character);
              var a = document.createElement("a");
              var file = new Blob([content], { type: "text/json" });
              a.href = URL.createObjectURL(file);
              a.download = character.name + ".json";
              a.click();
            }}
          />
          <label htmlFor="load-file" className="load-button-label">
            Load
          </label>
          <input
            id="load-file"
            type="file"
            accept=".json"
            onChange={async (inputEvent) => {
              var file = inputEvent.target.files?.item(0);
              if (file) {
                const fileCharacter = JSON.parse(await file.text());
                // guard against loading partial character sheets by loading
                // the character over the top of a complete default
                const guardedCharacter = {
                  ...DefaultCharacter,
                  ...fileCharacter,
                };
                setCharacter(guardedCharacter);
              }
            }}
          />
        </div>
        <div className="character-header">
          <div className="name-bar">
            <label htmlFor="character-name-input">Name:</label>
            <input
              id="character-name-input"
              value={character.name}
              onChange={(e) =>
                setCharacter((c) => ({ ...c, name: e.target.value }))
              }
            />
          </div>
          <div className="health-bar">
            <label htmlFor="hp-input" className="point-label">
              Health Points:
            </label>
            <input
              id="hp-input"
              className="small-number-input"
              value={character.hp}
              onChange={(e) => {
                const newHP = Number.parseInt(e.target.value);

                if (!Number.isNaN(newHP)) {
                  setCharacter((c) => ({ ...c, hp: newHP }));
                }
              }}
            />
            /
            <input
              className="small-number-input"
              value={character.maxHP}
              onChange={(e) => {
                const newMaxHP = Number.parseInt(e.target.value);

                if (!Number.isNaN(newMaxHP)) {
                  setCharacter((c) => ({ ...c, maxHP: newMaxHP }));
                }
              }}
            />
          </div>
          <div className="energy-bar">
            <label htmlFor="energy-input" className="point-label">
              Energy Cells:
            </label>
            <input
              id="energy-input"
              className="small-number-input"
              value={character.energyCells}
              onChange={(e) => {
                const newEN = Number.parseInt(e.target.value);

                if (!Number.isNaN(newEN)) {
                  setCharacter((c) => ({ ...c, energyCells: newEN }));
                }
              }}
            />
            /
            <input
              className="small-number-input"
              value={character.maxEnergyCells}
              onChange={(e) => {
                const newMaxEN = Number.parseInt(e.target.value);

                if (!Number.isNaN(newMaxEN)) {
                  setCharacter((c) => ({ ...c, maxEnergyCells: newMaxEN }));
                }
              }}
            />
          </div>
        </div>
        <textarea
          value={character.status}
          className="status-area area-entry"
          onChange={(e) => {
            setCharacter((c) => ({
              ...c,
              status: e.target.value,
            }));
          }}
        />
        <div className="class-skills-list">
          <label htmlFor="class-input">Class Skill(s)</label>
          <textarea
            id="class-input"
            value={character.classSkills}
            className="area-entry"
            onChange={(e) => {
              setCharacter((c) => ({
                ...c,
                classSkills: e.target.value,
              }));
            }}
          />
        </div>
        <div className="minor-skills-list">
          <label htmlFor="minor-skills-input">Minor Skills</label>
          <textarea
            id="minor-skills-input"
            value={character.minorSkills}
            className="area-entry"
            onChange={(e) => {
              setCharacter((c) => ({
                ...c,
                minorSkills: e.target.value,
              }));
            }}
          />
        </div>
        <div className="inventory">
          <label htmlFor="inventory-input">Inventory</label>
          <textarea
            id="inventory-input"
            value={character.inventory}
            className="area-entry"
            onChange={(e) => {
              setCharacter((c) => ({
                ...c,
                inventory: e.target.value,
              }));
            }}
          />
        </div>
      </div>
      <div className="page-outline second-page">
        <div className="special-actions">
          <label htmlFor="special=actions-input">Special Actions</label>
          <textarea
            id="special-actions-input"
            value={character.specialActions}
            className="area-entry"
            onChange={(e) => {
              setCharacter((c) => ({
                ...c,
                specialActions: e.target.value,
              }));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CharacterSheet;
