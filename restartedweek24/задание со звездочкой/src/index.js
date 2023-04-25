import Chart from 'chart.js/auto';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const apiUrl = "http://localhost:8080/https://api.myanimelist.net/v2";
const myHeaders = new Headers();
myHeaders.append("X-MAL-CLIENT-ID", "9bbec2b695411cc168841db934b434b5");
const genreChartCanvas = document.getElementById("genre-chart");
const yearsChartCanvas = document.getElementById("years-chart");
const spinnerHTML = document.getElementById("spinner");
const genreTable = document.getElementById("genre-table");
const yearsTable = document.getElementById("years-table");
const topThree = document.getElementById("top-three")


const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

async function allAnime(rankingType) {
    const response = await fetch(`${apiUrl}/anime/ranking?ranking_type=${rankingType}&limit=40&fields=id,title,start_date,genres,studios`, requestOptions);
    const json = await response.json();
    return json;
}


async function updateData() {
    spinnerHTML.classList.remove("hidden");
    const all = await allAnime("all");
    drawTopThree(all);
    drawGenreChart(all);
    drawYearsChart(await allAnime("airing"));
    spinnerHTML.classList.add("hidden");
}

function drawTopThree(animeList) {
    const slicedArray = animeList.data.slice(0, 3);
    topThree.innerHTML = slicedArray.map((element) =>
        `<div class = "top-anime">
        <img src = "${element.node.main_picture.medium}">
        <p>${element.node.title}</p>
        </div>`
    ).join("")
}

function drawGenreChart(animeList) {
    const genres = animeList.data.map((element) => element.node.genres.map((genre) => genre.name)).flat();
    const counts = [];
    for (const num of genres) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    new Chart(
        genreChartCanvas,
        {
            type: 'bar',
            data: {
                labels: Object.keys(counts),
                datasets: [
                    {
                        label: 'Anime in genre',
                        data: Object.values(counts)
                    }
                ]
            }
        }
    );
    new Handsontable(genreTable, {
        data: animeList.data,
        colHeaders: ['ID', 'Title', 'Genres'],
        columns: [
            { data: 'node.id' },
            { data: 'node.title' },
            { data: (e) => e.node.genres.map(g => g.name) },
        ],
        height: 'auto',
        width: '100%',
        minSpareRows: 1,
        licenseKey: 'non-commercial-and-evaluation'
    });
}



function drawYearsChart(animeList) {
    const studios = animeList.data.map((element) => element.node.studios.map((studio) => studio.name)).flat();
    console.log(studios);
    const counts = [];
    for (const num of studios) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    new Chart(
        yearsChartCanvas,
        {
            type: 'pie',
            data: {
                labels: Object.keys(counts),
                datasets: [
                    {
                        label: 'Anime by studio',
                        data: Object.values(counts)
                    }
                ]
            }
        }
    );
    new Handsontable(yearsTable, {
        data: animeList.data,
        colHeaders: ['ID', 'Title', 'Studio'],
        columns: [
            { data: 'node.id' },
            { data: 'node.title' },
            { data: (e) => e.node.studios.map(g => g.name) },
        ],
        height: 'auto',
        width: '100%',
        minSpareRows: 1,
        licenseKey: 'non-commercial-and-evaluation'
    });
}

(async () => {
    await updateData();
})()


