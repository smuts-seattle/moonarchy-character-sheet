export interface CharacterModel {
  name: string;
  classSkills: string;
  minorSkills: string;

  hp: number;
  maxHP: number;

  energyCells: number;
  maxEnergyCells: number;

  status: string;
  inventory: string;
  specialActions: string;
}

export const DefaultCharacter: CharacterModel = {
  name: "Enter Character Name",
  classSkills: "Enter Class Skills",
  minorSkills: "Enter Minor Skills",

  hp: 20,
  maxHP: 20,

  energyCells: 3,
  maxEnergyCells: 3,

  status: "Wounds:\n\nTemporary Effects:",
  inventory: "Enter Character Inventory",
  specialActions:
    "Use this area to write down the Special Actions that your character can take, and any reminders you need on the rules or how they work",
};
