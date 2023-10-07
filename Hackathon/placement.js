document.addEventListener("DOMContentLoaded", function () {
    const departmentDropdown = document.getElementById("department");
    const fetchDataButton = document.getElementById("fetchData");
    const placementTableBody = document.querySelector("#placementTable tbody");

    fetchDataButton.addEventListener("click", function () {
        const selectedDepartment = departmentDropdown.value;

        // Replace this with your actual data fetching logic
        // For example, fetch data from a server or use predefined data
        const departmentData = {
           
            it: [ 
                { id: 11, name: "Madhvi"       ,                department: "CSE"       ,           package: "60,000/-"         ,         year: 2022 },
                { id: 42, name: "vasanthi"     ,              department: "CSE"         ,           package: "55,000/-"         ,         year: 2023 },
                { id: 93, name: "anusha"       ,                department: "CSE"       ,           package: "88,000/-"         ,         year: 2022 },
                { id: 234, name: "revathi"     ,              department: "CSE"         ,           package: "55,000/-"         ,         year: 2023 },
                { id: 144, name: "Pallavi"       ,                department: "CSE"       ,           package: "75,000/-"         ,         year: 2022 },
                { id: 163, name: "Greeshma"     ,              department: "CSE"         ,           package: "55,000/-"         ,         year: 2023 },
                { id: 174, name: "Srujana"       ,                department: "CSE"       ,           package: "60,000/-"         ,         year: 2022 },
                { id: 180, name: "Saranya"     ,              department: "CSE"         ,           package: "55,000/-"         ,         year: 2023 },
                // Add more data for other departments
            { id: 111, name: "madhu"        ,                department: "AIDS"       ,           package: "60,000/-"         ,         year: 2022 },
                { id: 182, name: "vasu"         ,              department: "AIDS"         ,           package: "55,000/-"         ,         year: 2023 },
                { id: 1013, name: "Sahithi"        ,                department: "AIDS"       ,           package: "40,000/-"         ,         year: 2022 },
                { id: 176, name: "Priyanka"         ,              department: "AIDS"         ,           package: "25,000/-"         ,         year: 2023 },
                { id: 192, name: "Sujitha"        ,                department: "AIDS"       ,           package: "55,000/-"         ,         year: 2022 },
                { id: 141, name: "Yam"         ,              department: "AIDS"         ,           package: "50,000/-"         ,         year: 2023 },
                { id: 342, name: "Divya"        ,                department: "AIDS"       ,           package: "60,000/-"         ,         year: 2022 },
                { id: 241, name: "Tejasri"         ,              department: "AIDS"         ,           package: "55,000/-"         ,         year: 2023 },
          
            
                { id: 108, name: "tulasi"       ,                department: "EEE"       ,           package: "60,000/-"          ,         year: 2022 },
                { id: 432, name: "puji"         ,              department: "EEE"         ,           package: "25,000/-"          ,         year: 2023 },
                { id: 466, name: "jayasri"       ,                department: "EEE"       ,           package: "60,000/-"          ,         year: 2022 },
                { id: 561, name: "padhu"         ,              department: "EEE"         ,           package: "85,000/-"          ,         year: 2023 },
                { id: 598, name: "Ramya"       ,                department: "EEE"       ,           package: "50,000/-"          ,         year: 2022 },
                { id: 603, name: "Pavani"         ,              department: "EEE"         ,           package: "40,000/-"          ,         year: 2023 },
                { id: 665, name: "Santhi"       ,                department: "EEE"       ,           package: "40,000/-"          ,         year: 2022 },
                { id: 721, name: "Uma"         ,              department: "EEE"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 774, name: "Ananya"       ,                department: "EEE"       ,           package: "60,000/-"          ,         year: 2022 },
                { id: 832, name: "Chaitanya"         ,              department: "EEE"         ,           package: "55,000/-"          ,         year: 2023 },
           
                { id: 867, name: "pujitha"      ,                department: "ECE"       ,           package: "750,000/-"          ,         year: 2022 },
                { id: 892, name: "satya"        ,              department: "ECE"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 905, name: "Rama"      ,                department: "ECE"       ,           package: "40,000/-"          ,         year: 2022 },
                { id: 967, name: "Padma"        ,              department: "ECE"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 1109, name: "Gowri"      ,                department: "ECE"       ,           package: "20,000/-"          ,         year: 2022 },
                { id: 1086, name: "Pranthi"        ,              department: "ECE"         ,           package: "85,000/-"          ,         year: 2023 },
                { id: 1453, name: "Nandini"      ,                department: "ECE"       ,           package: "35,000/-"          ,         year: 2022 },
                { id: 1267, name: "Maneesha"        ,              department: "ECE"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 1367, name: "Buddy"      ,                department: "ECE"       ,           package: "65,000/-"          ,         year: 2022 },
                { id: 1567, name: "Bhargavi"        ,              department: "ECE"         ,           package: "55,000/-"          ,         year: 2023 },

            
            
                { id: 18, name: "Varsha"   ,                department: "IT "      ,           package: "60,000/-"          ,         year: 2022 },
                { id: 45, name: "Ayesha"       ,              department: "IT"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 98, name: "Honey"   ,                department: "IT "      ,           package: "60,000/-"          ,         year: 2022 },
                { id: 1687, name: "Sindhu"       ,              department: "IT"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 1876, name: "Varshitha"   ,                department: "IT "      ,           package: "60,000/-"          ,         year: 2022 },
                { id: 1741, name: "Sneha"       ,              department: "IT"         ,           package: "55,000/-"          ,         year: 2023 },
                { id: 1986, name: "Priya"   ,                department: "IT "      ,           package: "60,000/-"          ,         year: 2022 },
                { id:2004 , name: "Swathi"       ,              department: "IT"         ,           package: "55,000/-"          ,         year: 2023 },

            ],
        };

        // Clear existing table rows
        placementTableBody.innerHTML = "";

        // Populate the table with data for the selected department
        departmentData[selectedDepartment].forEach(student => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${student.id}</td><td></td>
                <td>${student.name}</td><td></td>
                <td>${student.department}</td><td></td>
                <td>${student.package}</td><td></td>
                <td>${student.year}</td><td></td>
            `;
            placementTableBody.appendChild(newRow);
        });

        // Show the table
        document.getElementById("placementData").classList.remove("hidden");
    });
});