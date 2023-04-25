const container = document.getElementById('container');

function blogPost(element) {
    return `
    <h2 class = "title">${element.title}</h2>
    <div class = "body">${element.body}</div>
    `
}

function toContainer(element) {
    container.innerHTML = element
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    return data
}

(async () => {
    const data = await getData();
    let newPosts = "";
    data.forEach(element => {
        const postHTML = blogPost(element);
        newPosts += postHTML;
    });
    toContainer(newPosts);
})()

