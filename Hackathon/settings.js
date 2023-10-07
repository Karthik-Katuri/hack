// JavaScript for handling settings menu
document.addEventListener("DOMContentLoaded", function () {
    // Placement table settings
    const placementSettingsButton = document.getElementById("placement-settings-button");
    const placementSettingsMenu = document.getElementById("placement-settings-menu");

    placementSettingsButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the body click event from closing the menu
        placementSettingsMenu.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        placementSettingsMenu.classList.remove("show");
    });

    // Student table settings
    const studentSettingsButton = document.getElementById("student-settings-button");
    const studentSettingsMenu = document.getElementById("student-settings-menu");

    studentSettingsButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the body click event from closing the menu
        studentSettingsMenu.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        studentSettingsMenu.classList.remove("show");
    });
});
