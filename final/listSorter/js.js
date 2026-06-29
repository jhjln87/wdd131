let people = [
    {
        name: 'John',
        age: 22,
        height_in: 67,
    },
    {
        name: 'Kaity',
        age: 27,
        height_in: 62,
    },
    {
        name: 'Wemby',
        age: 22,
        height_in: 88,
    },
    {
        name: 'Johnathan',
        age: 23,
        height_in: 72,
    },
    {
        name: 'Yedam',
        age: 27,
        height_in: 70,
    },
    {
        name: 'Alex',
        age: 21,
        height_in: 69,
    },
    {
        name: 'Jacob', 
        age: 18,
        height_in: 66,
    },
    {
        name: 'Tyler',
        age: 32,
        height_in: 76,
    },
]

let listContainer = document.querySelector('main');
let sortBy = 'height_in';


function findMin(method) {
    let num = 1000;
    people.forEach(person => {
        if (person[method] < num) {
            num = person[method]
        }
    })
    return num;
}
function findMax(method) {
    let num = 0;
    people.forEach(person => {
        if (person[method] > num) {
            num = person[method]
        }
    })
    return num;
}

function template(person, method, min, max) {
    let retrieve = person[method];
    switch (method) {
        case 'name':
            return `<span style="height:100%"><p>${retrieve}</p></span>`;
            break;
        case 'age': case 'height_in':
            let percentage = ((retrieve - min) / (max - min)) * 75 + 25;
            return `<span style="height:${percentage}%"><p>${person.name}</p></span>`;
            break;
    }
}

function render(method) {
    listContainer.innerHTML = '';
    people.forEach(person => {
        listContainer.innerHTML += template(person, method, findMin(method), findMax(method))
    });
}

render(sortBy);