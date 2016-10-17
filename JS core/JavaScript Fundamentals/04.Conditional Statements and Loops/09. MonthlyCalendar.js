function calendar([day, month, year]) {
    day = Number(day);
    month = Number(month);
    year = Number(year);

    let date = new Date(year, month - 1, day);
    let nextMonthDays = [];
    let prevMonthDays = [];
    let currentMonthDays = [];

    // Current month
    let currentMonth = new Date(date);
    currentMonth.setDate(1);
    let temp = new Date(currentMonth);
    temp.setMonth(currentMonth.getMonth() + 1);
    temp.setDate(0);
    let stop = temp.getDate();
    while (true) {
        currentMonthDays.push(new Date(currentMonth));
        if ((currentMonth.getDate() == stop))
            break;
        currentMonth.setDate(currentMonth.getDate() + 1);
    }

    // Next month
    let nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);
    while (true) {
        if (nextMonth.getDay() == 0)
            break;
        nextMonthDays.push(new Date(nextMonth));
        nextMonth.setDate(nextMonth.getDate() + 1);
    };

    // Previous month
    let prevMonth = new Date(date);
    prevMonth.setDate(0);
    while (true) {
        prevMonthDays.push(new Date(prevMonth));
        if (prevMonth.getDay() == 0)
            break;
        prevMonth.setDate(prevMonth.getDate() - 1);
    };
    prevMonthDays.reverse();

    // open table
    let html = "<table>\n";

    // Append headers
    html +=
        "<tr><th>Sun</th><th>Mon</th>" +
        "<th>Tue</th><th>Wed</th><th>Thu</th>" +
        "<th>Fri</th><th>Sat</th></tr>\n";
    // Flow helpers
    let counter = 0;
    let flow = -1;
    let currentMonthLen = currentMonthDays.length;
    let prevMonthLen = prevMonthDays.length;
    let nextMonthLen = nextMonthDays.length;
    let boundary = currentMonthDays[0].getDay() == 0
        ? (currentMonthLen + nextMonthLen) / 7
        : (currentMonthLen + prevMonthLen + nextMonthLen) / 7;

    // Append cells to table
    for (let row = 0; row < boundary; row++) {
        html += "  <tr>";

        for (let col = 0; col < 7; col++) {
            // Append previous month days
            if (counter < prevMonthLen && flow == -1) {
                // fix the flow if current month's starting day is Sat
                if (currentMonthDays[0].getDay() == 0) {
                    flow++;
                    counter = 0;
                    col--;
                    continue;
                }
                html += `<td class="prev-month">${prevMonthDays[counter].getDate()}</td>`;
            }
            // Control the flow
            if (counter == prevMonthLen && flow == -1 ||
                counter == currentMonthLen && flow == 0) {
                flow++;
                counter = 0;
            }
            // Append current month days
            if (counter < currentMonthLen && flow == 0) {
                if (currentMonthDays[counter].getDate() == day)
                    html += `<td class="today">${day}</td>`;
                else
                    html += `<td>${currentMonthDays[counter].getDate()}</td>`;
            }
            // Append next month days
            if (counter < nextMonthLen && flow == 1) {
                html += `<td class="next-month">${nextMonthDays[counter].getDate()}</td>`;
            }
            counter++;
        }

        html += "</tr>\n";
    }

    // close table
    html += "</table>";
    return html;
}
calendar(['24','12','2012']);