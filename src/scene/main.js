import Simulation from './simulation'

function main() {
    const canvas = document.querySelector('#scene-viewport')
    const simulation = new Simulation(canvas);
    simulation.init();
}

export default main;