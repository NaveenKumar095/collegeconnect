
document.getElementById("timetable-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const timetableDisplay = document.getElementById("timetable-display");

    if (branch && semester) {
        timetableDisplay.innerHTML = `
        <h3>${branch.toUpperCase()} - Semester ${semester}</h3>
        <table border="1" cellspacing="0" cellpadding="8">
            <tr class="head"><td>Day</td><td>9 AM-10 AM</td><td>10 AM-11 AM</td><td>11 AM-12 PM</td><td>1 PM-2 PM</td><td>2 PM-3 PM</td></tr>
            <tr><td class="heas">Monday</td><td>Math</td><td>DS</td><td>Break</td><td>COA</td><td>WT</td></tr>
            <tr><td class="heas">Tuesday</td><td>OS</td><td>WT</td><td>Break</td><td>Math</td><td>Lab</td></tr>
            <tr><td class="heas">Wednesday</td><td>DS</td><td>COA</td><td>Break</td><td>OS</td><td>Lab</td></tr>
            <tr><td class="heas">Thursday</td><td>WT</td><td>Math</td><td>Break</td><td>COA</td><td>DS</td></tr>
            <tr><td class="heas">Friday</td><td>Lab</td><td>Lab</td><td>Break</td><td>OS</td><td>WT</td></tr>
        </table>
        `;
    } else {
    timetableDisplay.innerHTML = `<p style="color:red;">Please select both branch and semester.</p>`;
    } 
});
