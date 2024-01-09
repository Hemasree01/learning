"use strict";
import School from "./School.js";

const everydayPack = new School("GRADES OF A STUDENT", 30, 15, false);

const content = `
<main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>math score:${everydayPack.subjects.subject1}</li>
          <li>chemistry score:${everydayPack.subjects.subject2}</li>
          <li>gate status:${everydayPack.gateOpen}</li>
        </ul>
      </article>
    </main>

`;
document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.name);
console.log(everydayPack.gateOpen);
everydayPack.toggleOpen(true);
console.log(everydayPack.gateOpen);
