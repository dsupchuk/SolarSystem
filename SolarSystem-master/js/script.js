const SolarSystemData = [
	{
		name: `Solar System`,
		data: `The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, the dwarf planets and small Solar System bodies.`
	},
	{
		name: `Sun`,
		data: `The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, and accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.`
	},
	{
		name: `Mercury`,
		data: `Mercury (0.4 AU from the Sun) is the closest planet to the Sun and on average, all seven other planets. The smallest planet in the Solar System (0.055 M⊕), Mercury has no natural satellites. Besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history. Mercury's very tenuous atmosphere consists of atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.`
	},
	{
		name: `Venus`,
		data: `Venus (0.7 AU from the Sun) is close in size to Earth (0.815 M⊕) and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity. It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C (752 °F), most likely due to the amount of greenhouse gases in the atmosphere. No definitive evidence of current geological activity has been detected on Venus, but it has no magnetic field that would prevent depletion of its substantial atmosphere, which suggests that its atmosphere is being replenished by volcanic eruptions.`
	},
	{
		name: `Earth`,
		data: `Earth (1 AU from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist. Its liquid hydrosphere is unique among the terrestrial planets, and it is the only planet where plate tectonics has been observed. Earth's atmosphere is radically different from those of the other planets, having been altered by the presence of life to contain 21% free oxygen. It has one natural satellite, the Moon, the only large satellite of a terrestrial planet in the Solar System.`
	},
	{
		name: `Mars`,
		data: `Mars (1.5 AU from the Sun) is smaller than Earth and Venus (0.107 M⊕). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (roughly 0.6% of that of Earth). Its surface, peppered with vast volcanoes, such as Olympus Mons, and rift valleys, such as Valles Marineris, shows geological activity that may have persisted until as recently as 2 million years ago. Its red colour comes from iron oxide (rust) in its soil. Mars has two tiny natural satellites (Deimos and Phobos) thought to be either captured asteroids, or ejected debris from a massive impact early in Mars's history.`
	},
	{
		name: `Jupiter`,
		data: `Jupiter (5.2 AU), at 318 M⊕, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot. Jupiter has 79 known satellites. The four largest, Ganymede, Callisto, Io, and Europa, show similarities to the terrestrial planets, such as volcanism and internal heating. Ganymede, the largest satellite in the Solar System, is larger than Mercury.`
	},
	{
		name: `Saturn`,
		data: `Saturn (9.5 AU), distinguished by its extensive ring system, has several similarities to Jupiter, such as its atmospheric composition and magnetosphere. Although Saturn has 60% of Jupiter's volume, it is less than a third as massive, at 95 M⊕. Saturn is the only planet of the Solar System that is less dense than water. The rings of Saturn are made up of small ice and rock particles. Saturn has 82 confirmed satellites composed largely of ice. Two of these, Titan and Enceladus, show signs of geological activity. Titan, the second-largest moon in the Solar System, is larger than Mercury and the only satellite in the Solar System with a substantial atmosphere.`
	},
	{
		name: `Uranus`,
		data: `Uranus (19.2 AU), at 14 M⊕, is the lightest of the outer planets. Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic. It has a much colder core than the other giant planets and radiates very little heat into space. Uranus has 27 known satellites, the largest ones being Titania, Oberon, Umbriel, Ariel, and Miranda.`
	},
	{
		name: `Neptune`,
		data: `Neptune (30.1 AU), though slightly smaller than Uranus, is more massive (17 M⊕) and hence more dense. It radiates more internal heat, but not as much as Jupiter or Saturn. Neptune has 14 known satellites. The largest, Triton, is geologically active, with geysers of liquid nitrogen. Triton is the only large satellite with a retrograde orbit. Neptune is accompanied in its orbit by several minor planets, termed Neptune trojans, that are in 1:1 resonance with it.`
	}
]

const accordionSolarSystem = document.querySelector('#accordionSolarSystem');
const renderSolarSystem = document.querySelector('#renderSolarSystem');
const wrapper = document.querySelector('#wrapper');

const SinglePlanet = {
	SolarSystem: data => new SolarSystem(data),
	Sun: data => new Sun(data),
	Earth: data => new Earth(data)
}

class Planets{
	static createPlanets(arr){
		console.log(arr);

		let planets = arr.map(planet => SinglePlanet[planet.name.replace(' ','')] ? SinglePlanet[planet.name.replace(' ','')](planet) : new Planet(planet))
		console.log(planets);
			
		let planetsAccordion = planets
			.map((planet,index)=>planet.renderPlanet(index))
			.join('');

		planets.map(planet=>planet.renderPipeline());

		accordionSolarSystem.innerHTML = planetsAccordion;
	}
}

class Planet{
	constructor(planet){
		this.createPlanet(planet);
	}

	createPlanet(planet){
		for(let key in planet){
			this[key] = planet[key];
		}
	}

	renderPlanet(index){
		return `<div class="accordion-item">
		    <h2 class="accordion-header" id="heading${this.name.replace(' ','')}">
		      <button class="accordion-button ${index !=0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.name.replace(' ','')}" aria-expanded="${index !=0 ? 'false' : 'true'}" aria-controls="collapse${this.name.replace(' ','')}">
		        <img class="accordion-button__img" src="./images/${this.name.replace(' ','')}.svg" width="25" height="25">
		        ${this.name}
		      </button>
		    </h2>
		    <div id="collapse${this.name.replace(' ','')}" class="accordion-collapse collapse ${index !=0 ? '' : 'show'}" aria-labelledby="heading${this.name.replace(' ','')}" data-bs-parent="#accordionSolarSystem">
		      <div class="accordion-body">${this.data}</div>
		    </div>
		  </div>`;
	}

	renderPipeline(){

		let planetBlock = document.createElement('div');
		planetBlock.classList.add('render__planet')

		let planet = document.createElement('img');
		planet.id = `render__${this.name.replace(' ','')}`;
		planet.src = `./images/${this.name.replace(' ','')}.svg`
		planet.alt = this.name;
		planet.width = 35;
		planet.height = 35;

		planet.setAttribute('data-bs-toggle','tooltip');
		planet.setAttribute('data-bs-placement','top');
		planet.title = this.name;

		planet.addEventListener('click',this.pipelineClick.bind(this));

		let planetTitle = document.createElement('p');
		planetTitle.innerHTML = this.name;

		planetBlock.append(planet);
		planetBlock.append(planetTitle);

		renderSolarSystem.append(planetBlock);
	}

	pipelineClick(){
		let btn = document.querySelector(`button[aria-controls="collapse${this.name.replace(' ','')}"]`);
			btn.click();
	}
}

class SolarSystem extends Planet{
	constructor(planet){
		super(planet);
	}

	renderPipeline(){
		let heading = document.createElement('h1');
		heading.innerHTML = `<img src="images/${this.name.replace(' ','')}.svg" alt="${this.name}" width="50" height="50"> Introduction to ${this.name}`;
		wrapper.prepend(heading);
	}
}

class Sun extends Planet{
	constructor(planet){
		super(planet);
	}

	pipelineClick(){
		super.pipelineClick();
		this.sunMethod();
	}

	sunMethod(){
		alert(`Hello, I'm ${this.name}`);
	}
}


class Earth extends Planet{
	constructor(planet){
		super(planet);
	}

	pipelineClick(){
		super.pipelineClick();
		this.earthMethod();
	}

	earthMethod(){
		console.log(`Hello, I'm ${this.name}`);
	}
}

Planets.createPlanets(SolarSystemData);




