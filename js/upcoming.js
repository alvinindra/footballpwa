function upcomingMatchJSON(data) {
    var UpcomingHTML = ''
    data.matches.forEach(function (upcoming) {
        upcoming = JSON.parse(JSON.stringify(upcoming).replace(/http:/g, 'https:'));
        UpcomingHTML += `
        <ul class="a-club-title">
            <li class="a-font-bold">${upcoming.homeTeam.name}</li>
            <li>VS</li>
            <li class="a-font-bold">${upcoming.awayTeam.name}</li>
        </ul>
        <ul class="a-stadium">
            <li>${upcoming.competition.name}</li>
        </ul>
        <ul class="a-date">
            <li class="a-font-bold">${convertDate(new Date(upcoming.utcDate))}</li>
        </ul>`
    });
    document.getElementById("upcoming-content").innerHTML = UpcomingHTML;
}