// Your code here 
// Fetch characters and render them in the character bar
document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const voteForm = document.getElementById("votes-form");
    const resetButton = document.getElementById("reset-btn");

fetch("http://localhost:3000/characters")
    .then((response) => response.json())
    .then((characters) => {
        characters.forEach((character) => {
            const span = document.createElement("span");
            span.textContent = character.name;
            span.style.cursor = "pointer";
            span.addEventListener("click", () => displayCharacterDetails(character));
            characterBar.appendChild(span);
        });

   