let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})
// Sample student data (replace with actual data)
// Sample student data (replace with actual data)
const students = [
    { name: 'John Doe', registrationNumber: '12345', phone: '123-456-7890', branch: 'Computer Science' },
    { name: 'Jane Smith', registrationNumber: '67890', phone: '987-654-3210', branch: 'Electrical Engineering' },
    { name: 'Alice Johnson', registrationNumber: '54321', phone: '555-555-5555', branch: 'Mechanical Engineering' },
    { name: 'Bob Brown', registrationNumber: '98765', phone: '111-222-3333', branch: 'Civil Engineering' },
    { name: 'Eva Williams', registrationNumber: '45678', phone: '444-333-2222', branch: 'Chemical Engineering' },
    { name: 'Michael Lee', registrationNumber: '34567', phone: '999-888-7777', branch: 'Computer Science' },
];

// Function to populate the student details table
function populateStudentTable() {
    const studentTableBody = document.getElementById('student-table-body');
    studentTableBody.innerHTML = ''; // Clear existing rows

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.registrationNumber}</td>
            <td>${student.phone}</td>
            <td>${student.branch}</td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
window.addEventListener('load', populateStudentTable);

