let people = []

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
            let percentage;
            if (min == max) {
                percentage = 100;
            } else {
                percentage = ((retrieve - min) / (max - min)) * 75 + 25;
            }
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


function compareObj(method) {
    return function(a, b) {
        if (a[method] < b[method]) {
            return -1;
        } else if (a[method] > b[method]) {
            return 1;
        }
        return 0;
    };
}

function sortList(method) {
    switch (method) {
        case 'name':
            return people.sort(compareObj('name'));
            break;
        case 'age': case 'height_in':
            return people.sort(compareObj(method));
            break;
    }
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
        sortList(sortBy)
        render(sortBy);
    }
});

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (nameInput.value === "test" && parseInt(ageInput.value) === 0) {
        admin();
        render(sortBy);
        addForm.reset();
        return;
    }
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


function admin() {
    people.push({name:"John", age:22, height_in:68, gender:"M"});
    people.push({name:"Wemby", age:22, height_in:88, gender:"M"});
    people.push({name:"Kaitlyn", age:27, height_in:62, gender:"F"});
    people.push({name:"Yedam", age:27, height_in:70, gender:"M"});
    people.push({name:"Johnathan", age:23, height_in:72, gender:"M"});
    people.push({name:"Alex", age:20, height_in:67, gender:"M"});
    people.push({name:"Jacob", age:18, height_in:66, gender:"M"});
    people.push({name:"Woman", age:25, height_in:64, gender:"F"});
}


function init() {
    addForm.classList.add('hide');
    sortForm.classList.add('hide');
    sortBy = "height_in";
    listContainer.innerHTML = `<h3>Your list is empty!</h3>`
}

init();