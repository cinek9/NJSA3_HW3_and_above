function Person(firstName, lastName, age, city) {
    return {
        firstName,
        lastName,
        age,
        city
    }
}

const personsList = [
    Person('Andrzej', 'Kowalski', 44, 'Krakow'),
    Person('Dawid', 'Nowak', 25, 'Warszawa'),
    Person('Karolina', 'Tomaszewska', 31, 'Krakow'),
    Person('Ireneusz', 'Dobrowski', 33, 'Katowice')
];

const oldestList = [
    Person('Andrzej', 'Kowalski', 44, 'Krakow'),
    Person('Dawid', 'Nowak', 25, 'Warszawa'),
    Person('Karolina', 'Tomaszewska', 31, 'Krakow'),
    Person('Ireneusz', 'Dobrowski', 33, 'Katowice')
];

const onlyKrkList = [
    Person('Andrzej', 'Kowalski', 44, 'Krakow'),
    Person('Dawid', 'Nowak', 25, 'Warszawa'),
    Person('Karolina', 'Tomaszewska', 31, 'Krakow'),
    Person('Ireneusz', 'Dobrowski', 33, 'Katowice')
];

function renderPersonsList() {
    const personsListElement = document.getElementById('personsList');
    personsListElement.innerHTML = '';
    for (let i = 0; i < personsList.length; i++) {
        const personElement = document.createElement('li');
        personElement.innerText = `${personsList[i].firstName} ' ' ${personsList[i].lastName} ' ' ${personsList[i].age} ' ' ${personsList[i].city}`;
        personsListElement.appendChild(personElement);
    }
}

function renderOldestList() {
    let max = oldestList[0].age;
    let maxIndex = 0;
    let maxName = "";
    const olderListElement = document.getElementById('TheOldestList');
    olderListElement.innerHTML = '';
    for (let i = 0; i < oldestList.length; i++) {
        if (oldestList[i].age == max) {
            maxIndex = i;
            max = oldestList[i].age;
            maxName = oldestList[i].name;
            const olderElement = document.createElement('li');
            olderElement.innerText = `${oldestList[i].firstName} ' ' ${oldestList[i].lastName} ' ' ${oldestList[i].age} ' ' ${oldestList[i].city}`;
            olderListElement.appendChild(olderElement);
        }

    }
}

function renderKrkList() {
    const onlyKrkListElement = document.getElementById('TheKrkList');
    onlyKrkListElement.innerHTML = '';
    for (let i = 0; i < onlyKrkList.length; i++) {
        if (onlyKrkList[i].city == 'Krakow') {
            const onlyKrkElement = document.createElement('li');
            onlyKrkElement.innerText = `${oldestList[i].firstName} ' ' ${oldestList[i].lastName} ' ' ${oldestList[i].age} ' ' ${oldestList[i].city}`;
            onlyKrkListElement.appendChild(onlyKrkElement);
        }

    }
}

function isValidData() {
    const personFirstNameElement = document.getElementById('firstName');
    const personLastNameElement = document.getElementById('lastName');
    const personAgeElement = document.getElementById('age');
    const personCityElement = document.getElementById('city');

    if (personFirstNameElement.value === '') {
        console.error('first name can not be empty');
        return false;
    }
    if (personLastNameElement.value === '') {
        console.error('last name can not be empty');
        return false;
    }
    if (personAgeElement.value === '' || Number.isNaN(Number(personAgeElement.value))) {
        console.error('age can not be empty');
        return false;
    }
    if (personCityElement.value === '') {
        console.error('city can not be empty');
        return false;
    }
    return true;
}

function init() {
    const myBtnAdd = document.getElementById('myBtnAdd');
    const myBtnOldMan = document.getElementById('myBtnOldMan');
    const myBtnKrK = document.getElementById('myBtnKrK');


    myBtnAdd.addEventListener('click', (event) => {
        event.preventDefault();

        const personFirstNameElement = document.getElementById('firstName');
        const personLastNameElement = document.getElementById('lastName');
        const personAgeElement = document.getElementById('age');
        const personCityElement = document.getElementById('city');


        if (!isValidData()) {
            return;
        }

        const PersonList = {
            firstName: personFirstNameElement.value,
            lastName: personLastNameElement.value,
            age: personAgeElement.value,
            city: personCityElement.value
        }

        const OlderList = {
            firstName: personFirstNameElement.value,
            lastName: personLastNameElement.value,
            age: personAgeElement.value,
            city: personCityElement.value
        }

        const OnlyKrkList = {
            firstName: personFirstNameElement.value,
            lastName: personLastNameElement.value,
            age: personAgeElement.value,
            city: personCityElement.value
        }

        personsList.push(PersonList);
        renderPersonsList();

        oldestList.push(OlderList);
        renderOldestList();

        onlyKrkList.push(OnlyKrkList);
        renderKrkList();

        personFirstNameElement.value = '';
        personLastNameElement.value = '';
        personAgeElement.value = '';
        personCityElement.value = '';
    });
}

init();
renderPersonsList();
renderOldestList();
renderKrkList();
