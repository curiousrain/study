const titlePost = document.getElementById('title-post');
const textPost = document.getElementById('text-post');
const container = document.getElementById('container');

function blogPost(element) {
    return `
    <h2 class = "title">${element.title}</h2>
    <div class = "body">${element.body}</div>
    `
}

function toContainer(element) {
    container.innerHTML += element
}


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titlePost.value,
            body: textPost.value,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
        .then(response => response.json())
        .then(json => {
            const postHTML = blogPost(json);
            toContainer(postHTML);
        })
}
