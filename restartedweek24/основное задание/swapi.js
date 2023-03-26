const categorySearch = document.getElementById("category");
const numberSearch = document.getElementById("number-id");
const articleInfo = document.getElementById("article-info");
const loadingImage = document.getElementById("loader");

async function search() {
    let displayInfo;
    try {
        loadingImage.classList.remove("hidden");
        const response = await fetch(`https://swapi.dev/api/${categorySearch.value}/${numberSearch.value}`);
        if (!response.ok) {
            throw new Error(`${response.status}`)
        }
        const data = await response.json();
        displayInfo = data.title ?? data.name;
    }
    catch (error) {
        displayInfo = `Ошибка ввода данных ${error} `;
    }
    finally {
        loadingImage.classList.add("hidden");
        articleInfo.innerHTML = displayInfo
    }
}