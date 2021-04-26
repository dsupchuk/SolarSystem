import {SolarSystemData} from "./data.js"
const accordionSolarSystem = document.querySelector('#accordionSolarSystem')
class Stars{
    
    static createStars(arr){
        console.log(arr)
        let planets = arr
        .map(planet=>new Planet(planet))
        .map(planet=>planet.renderPlanet())
        .join('')
        accordionSolarSystem.innerHTML = planets
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
}
Stars.createStars(SolarSystemData)