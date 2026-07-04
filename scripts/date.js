//The current year
const today = new Date();
const year = document.querySelector("#year");
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//Last modification
let lastModif = new Date(document.lastModified);
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;