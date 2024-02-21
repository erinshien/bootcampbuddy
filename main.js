const buddySelector = document.getElementById("buddy-selector");
const selectedBuddy = document.getElementById("selected-buddy");

selectedBuddy.src = "";

buddySelector.addEventListener("change", function() {

    let selectedBuddyValue = buddySelector.value;

    if (selectedBuddyValue === "buddy-erin") {
        selectedBuddy.src = "images/pixelcharactererin.png";
    } else if (selectedBuddyValue === "buddy-rachel") {
        selectedBuddy.src = "images/pixelcharacterrachel.png";
    }
});

