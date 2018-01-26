function monthlyCalendar(day,month,year) {
    let calendar = '<table>'
    let currentDay = new Date(day,month,year)
    calender += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>'

    console.log(currentDay)
}
monthlyCalendar(31,12,2017)