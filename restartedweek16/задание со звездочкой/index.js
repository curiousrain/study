let str = "<p>Текст</p>"
function deleteTags(str) {
    return str.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "")
}
console.log(deleteTags(str));