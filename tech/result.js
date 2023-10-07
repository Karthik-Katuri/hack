document.addEventListener("DOMContentLoaded", function () {
    const departmentDropdown = document.getElementById("department");
    const subscribeButton = document.getElementById("subscribe");
    const notificationsContainer = document.getElementById("notifications");
    const notificationArea = document.getElementById("notificationArea");

    subscribeButton.addEventListener("click", function () {
        const selectedDepartment = departmentDropdown.value;

        // Replace this with your notification logic
        const notificationMessage = `
        <div class="center-text">
            <strong>*New placement result notification for ${selectedDepartment}*</strong><br><br>
        </div>
        <strong>Event Date:</strong> October 20, 2023<br>
        <br>
        Mark your calendars for the upcoming campus recruitment event.<br>
        <br>
        <strong>Company:</strong> Amazon Tech Solutions<br>
        - A leading technology company specializing in software development.<br>
        <br>
        <strong>Position:</strong> Software Engineer Intern<br>
        - Explore internship opportunities with Amazon Tech Solutions.<br>
        <br>
        <strong>Eligibility:</strong><br>
        - Open to all the department students.<br>
        - Minimum CGPA requirement: 7.0.<br>
        <br>
        <strong>Application Deadline:</strong><br>
        - Submit your resume and cover letter by October 10, 2023.
        `;

        // Create a new notification div with CSS class
        const notificationDiv = document.createElement("div");
        notificationDiv.innerHTML = notificationMessage;
        notificationDiv.classList.add("notification");

        // Check if there's an existing notification div
        const existingNotification = notificationsContainer.querySelector("div.notification");

        if (existingNotification) {
            // If an existing notification div exists, update its content
            existingNotification.innerHTML = notificationMessage;
        } else {
            // If there's no existing notification div, create a new one
            notificationsContainer.appendChild(notificationDiv);
        }

        // Show the notification area
        notificationArea.classList.remove("hidden");
    });
});