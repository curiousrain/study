let input = document.getElementById("input");
let surname = document.getElementById("surname");
let firstName = document.getElementById("name");
let patronymic = document.getElementById("patronymic");

function save () {
    let fio = input.value
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[^a-zA-ZА-Яа-я\s]+/g,"");
    let names = fio.split(" ");
    let normal = names.map((partOfName)=>{
        const firstLetter = partOfName.substring (0,1).toUpperCase();
        const other = partOfName.substring (1).toLowerCase();
        const full = firstLetter + other;
        return full;
    });
    surname.value = normal[0];
    firstName.value = normal[1];
    patronymic.value = normal[2];
}
