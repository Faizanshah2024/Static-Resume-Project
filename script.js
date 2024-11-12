// Get references to the button and the skills section
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Event listener for button click
toggleSkillsButton.addEventListener("click", function () {
    // Toggle visibility by adding/removing a hidden class
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
