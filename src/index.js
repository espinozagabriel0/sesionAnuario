import { header } from "./components/header.js";
import { home } from "./vistas/home.js";
import {about} from "./vistas/about.js"

function app(){
    return `
        ${header()}
        <div id="vistas">
            ${home()}
        </div>
    `;
}


document.querySelector('#root').innerHTML = app();

// Vista home
// document.querySelector('#vistas').innerHTML = 