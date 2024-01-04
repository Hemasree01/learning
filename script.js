"use strict";
import School from "./School.js";

const everydayPack = new School("Everyday Backpack", 30, 15, false);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.name);
console.log(everydayPack.gateOpen);
everydayPack.toggleOpen(true);
console.log(everydayPack.gateOpen);
