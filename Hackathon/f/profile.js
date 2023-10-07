<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and CSS link go here -->
</head>
<body>
    <header class="student-header">
        <h1>Student Profile</h1>
    </header>
    <main class="student-content">
        <section id="student-info">
            <h2>Student Information</h2>
            <div class="student-details">
                <p><strong>Name:</strong> <?php echo $studentName; ?></p>
                <p><strong>Student ID:</strong> <?php echo $studentID; ?></p>
            </div>
        </section>
        <section id="placement-history">
            <h2>Placement History</h2>
            <table class="placement-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Package</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($placements as $placement): ?>
                        <tr>
                            <td><?php echo $placement['company']; ?></td>
                            <td><?php echo $placement['package']; ?></td>
                            <td><?php echo $placement['year']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>
