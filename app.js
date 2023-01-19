console.log("hi");

const getCountryByName = async (countryName)=> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();

    for (jsonPoperty of jsonData){
        const jsonName = jsonPoperty.name.official
        const jsonPopulation = jsonPoperty.population

        const section = document.getElementById("countriesSection");
        const countriesList = document.createElement("ul");
        const countriesName = document.createElement("li");
        countriesName.textContent = jsonName;

        const countriesPopulation = document.createElement("li");
        countriesPopulation.textContent = jsonPopulation;

        countriesList.appendChild(countriesName);
        countriesList.appendChild(countriesPopulation);
        section.appendChild(countriesList);
    }

}

const getAllCountries = async ()=> {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();

    for (jsonPoperty of jsonData){
        const jsonName = jsonPoperty.name.official
        const jsonPopulation = jsonPoperty.population

        const section = document.getElementById("countriesSection");
        const countriesList = document.createElement("ul");
        const countriesName = document.createElement("li");
        countriesName.textContent = jsonName;

        const countriesPopulation = document.createElement("li");
        countriesPopulation.textContent = jsonPopulation;

        countriesList.appendChild(countriesName);
        countriesList.appendChild(countriesPopulation);
        section.appendChild(countriesList);
    }
}

const button = document.getElementById("enter");

button.addEventListener("click", (event) => {
    console.log("The button has been clicked!");
  
});

const toDoList = document.querySelector("#textForm")

const handleToDoListSubmit = (event) => { 

    event.preventDefault();
    const section = document.getElementById("countriesSection");

    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    const countryName = event.target.textBox.value; 
    getCountryByName(countryName);

}

toDoList.addEventListener("submit", handleToDoListSubmit);

getAllCountries();
