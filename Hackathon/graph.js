document.addEventListener("DOMContentLoaded", function () {
    // Replace these numbers with your actual data
    const departmentData = {
        CSE: 300,
        IT: 250,
        AIDS: 150,
        EEE: 100,
        ECE: 200,
    };

    for (const department in departmentData) {
        const bar = document.getElementById(department);
        const studentCount = departmentData[department];
        bar.style.height = studentCount + "px";
        bar.textContent = department.toUpperCase() + "\n" + studentCount + " Students";
    }
});
