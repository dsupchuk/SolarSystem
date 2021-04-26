import {SolarSystemData} from "./data.js"
const accordionSolarSystem = document.querySelector('#accordionSolarSystem')
const renderSolar = document.querySelector('#renderSolar')
const solar = document.querySelector('#solar')
const SinglePlanet = {
	SolarSystem: data => new SolarSystem(data),
	Sun: data => new Sun(data),
	// Earth: data => new Earth(data)
}
class Stars{
    
    static createStars(arr){
        console.log(arr)
        let planets = arr
        .map(planet=> SinglePlanet[planet.name.replace(' ','')] ? SinglePlanet[planet.name.replace(' ','')](planet) : new Planet(planet))
        console.log(planets)

        let AcordionPlanets = planets
        .map(planet=>planet.renderPlanet())
        .join('');

        planets.map(planet=>planet.renderLine())

        accordionSolarSystem.innerHTML = AcordionPlanets
        // console.log(planets)
    }
}
class Planet{
    constructor(planet){
        this.createPlanet(planet)

    }
    createPlanet(planet){
        for(let key in planet){
            this[key] = planet[key]
        }
    }
    renderPlanet(){
        return `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${this.name.replace(' ', '')}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.name.replace(' ', '')}"
                aria-expanded="false" aria-controls="collapse${this.name.replace(' ', '')}">
                <img class="img-acc" src="./images/${this.name.replace(' ', '')}.svg" width="30">
                ${this.name}
            </button>
        </h2>
        <div id="collapse${this.name.replace(' ', '')}" class="accordion-collapse collapse" aria-labelledby="heading${this.name.replace(' ', '')}"
            data-bs-parent="#accordionSolarSystem">
            <div class="accordion-body">
                ${this.data}
            </div>
        </div>
    </div>`
    }
    renderLine(){
        let sun = document.createElement('img')
        sun.id = `render__${this.name.replace(' ', '')}`
        sun.src = `./images/${this.name.replace(' ', '')}.svg`
        sun.alt = this.name
        
        sun.addEventListener('click', ()=>{
            let btn = document.querySelector(`button[aria-controls="collapse${this.name.replace(' ','')}"]`)
            btn.click()
        })
        renderSolar.append(sun)
    }

    }

class Sun extends Planet{
    constructor(planet){
        super(planet);
    }
}
    
class SolarSystem extends Planet{
    constructor(planet){
        super(planet);
    }
    renderLine(){
        let header = document.createElement('h1')
        header.innerHTML = `<img src="images/${this.name.replace(' ', '')}.svg" alt="${this.name}" width="50px">${this.name}`
        solar.prepend(header)
    }
}
    


Stars.createStars(SolarSystemData)