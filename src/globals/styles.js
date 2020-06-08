import {blue, darkerBlue} from "./theme.js";

export const whiteContainer = `
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  padding: 10px;
  border-radius: 5px;
`;

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const standardButton = `
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  color: white;
  transition: background-color .5s;
  cursor: pointer;
  background-color: ${darkerBlue};
  padding: .66em .9em;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;

  :hover{
    background-color: ${blue};
  }
`;

export const standardInput = `
  background-color: white;
  height: 25px;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1);
  border-color: #bbbbbb #cfcfcf #e0e0e0 #cfcfcf;
  border-radius: 3px;
  padding: 5px;
`;

export const linkStyle =  `
  padding: 8px;
  
  :hover {
    color: #dae0e5;
  }
`;

