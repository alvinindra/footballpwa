function hasilTerakhirMatchJSON(data) {
    var LatestHTML = ''
    data.matches.forEach(function (latest) {
        latest = JSON.parse(JSON.stringify(latest).replace(/http:/g, 'https:'));
        LatestHTML += `
        <ul class="a-score">
            <li>${latest.score.fullTime.homeTeam}</li>
            <li>:</li>
            <li>${latest.score.fullTime.awayTeam}</li>
        </ul>
        <ul class="a-club-title">
            <li class="a-font-bold">${latest.homeTeam.name}</li>
            <li>VS</li>
            <li class="a-font-bold">${latest.awayTeam.name}</li>
        </ul>
        <ul class="a-stadium">
            <li>${latest.competition.name}</li>
        </ul>
        <ul class="a-date">
            <li class="a-font-bold">${convertDate(new Date(latest.utcDate))}</li>
        </ul>`
    });
    document.getElementById("latest-content").innerHTML = LatestHTML;
}