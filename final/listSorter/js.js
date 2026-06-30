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
let sortBy;
let addFormButton = document.getElementById('addButton');
let sortByButton = document.getElementById('sortButton');
let addForm = document.getElementById('newPersonForm');
let sortForm = document.getElementById('sortByForm');
let select = sortForm.querySelector('#sortRadioContainer');

addFormButton.addEventListener('click', () => {
    addForm.classList.toggle('hide');
    sortForm.classList.add('hide');
});
sortByButton.addEventListener('click', () => {
    sortForm.classList.toggle('hide');
    addForm.classList.add('hide');
});


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


select.addEventListener('change', (item) => {
    sortBy = item.target.value
    render(sortBy); 
});

sortForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let selected = sortForm.querySelector('input[name="sortBy"]:checked');
    if (selected) {
        sortBy = selected.value;
        render(sortBy);
    }
});

addForm.addEventListener('submit', (event) => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const genderInput = document.querySelector('input[name="gender"]:checked');
    
    let newPerson = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        height_in: parseInt(heightInput.value),
        gender: genderInput.value
    };
    
    people.push(newPerson);
    render(sortBy);
    addForm.reset();
});


function init() {
    addForm.classList.add('hide');
    sortForm.classList.add('hide');
    sortBy = "height_in";
    render(sortBy);
}

init();