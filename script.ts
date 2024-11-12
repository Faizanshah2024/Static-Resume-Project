// Get references to the button and the skills section
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Event listener for button click
toggleSkillsButton.addEventListener("click", () => {
    // Toggle visibility by adding/removing a hidden class
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
