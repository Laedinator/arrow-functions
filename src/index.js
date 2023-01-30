import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x => x * 2 );

//////Filter - Create a new array by keeping the items that return true.
//const newNumbers = numbers.filter(num => num < 19);

//Reduce - Accumulate a value by doing something to each item in an array.
//const newNumbers = numbers.reduce((acc, currentValue) => acc + currentValue );

////Find - find the first item that matches from an array.

//const newNumber = numbers.find(num => num < 10);

////FindIndex - find the index of the first item that matches.
//const newNumber = numbers.findIndex(num => num > 10);
