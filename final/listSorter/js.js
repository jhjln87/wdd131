let people = [
    {
        name: 'John',
        age: 22,
        height_in: 67,
        gender: 'M',
    },
    {
        name: 'Kaity',
        age: 27,
        height_in: 62,
        gender: 'F',
    },
    {
        name: 'Wemby',
        age: 22,
        height_in: 88,
        gender: 'M',
    },
    {
        name: 'Johnathan',
        age: 23,
        height_in: 72,
        gender: 'M',
    },
    {
        name: 'Yedam',
        age: 27,
        height_in: 70,
        gender: 'M',
    },
    {
        name: 'Alex',
        age: 21,
        height_in: 69,
        gender: 'M',
    },
    {
        name: 'Jacob', 
        age: 18,
        height_in: 66,
        gender: 'M',
    },
    {
        name: 'Tyler',
        age: 32,
        height_in: 76,
        gender: 'M',
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
    let color;
    if (person.gender == "M") {
        color = "#C6E2FF";
    } else {
        color = "#FFB6C1";
    }
    switch (method) {
        case 'name':
            return `<span style="height:100%; background-color:${color}"><p>${retrieve}</p></span>`;
            break;
        case 'age': case 'height_in':
            let percentage = ((retrieve - min) / (max - min)) * 75 + 25;
            return `<span style="height:${percentage}%; background-color:${color}"><p>${person.name}</p></span>`;
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